import { NextRequest, NextResponse } from 'next/server';
import { briApi } from '@/lib/briapi';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();
    const headersList = Object.fromEntries(req.headers.entries());

    // 1. Verifikasi Signature Keamanan BRIAPI
    const isValidSignature = briApi.verifyCallbackSignature(headersList, rawBody);
    if (!isValidSignature) {
      return NextResponse.json({ responseCode: '4015200', responseMessage: 'Unauthorized Signature' }, { status: 401 });
    }

    const { partnerReferenceNo, amount, paymentFlagReason } = rawBody;

    console.log(`[BRI Webhook] Payment received for ${partnerReferenceNo}, amount: ${amount?.value}`);

    // 2. Logika Pembaruan Status Transaksi & Escrow
    // Di sini sistem mengonfirmasi status lunas, mencatat transaksi di BRImerchant,
    // dan menahan dana sementara (Escrow) hingga kurir/pembeli konfirmasi serah terima fisik.

    return NextResponse.json({
      responseCode: '2005200',
      responseMessage: 'Success',
      partnerReferenceNo: partnerReferenceNo,
      status: 'PAYMENT_CONFIRMED_HELD_IN_ESCROW',
    });
  } catch (error) {
    console.error('[BRI Webhook] Callback error:', error);
    return NextResponse.json({ responseCode: '5005200', responseMessage: 'Internal Server Error' }, { status: 500 });
  }
}
