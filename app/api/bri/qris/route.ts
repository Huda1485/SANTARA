import { NextRequest, NextResponse } from 'next/server';
import { briApi } from '@/lib/briapi';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, partnerReferenceNo, merchantName, type } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Nominal pembayaran tidak valid' }, { status: 400 });
    }

    const reference = partnerReferenceNo || 'SNT-' + Date.now();

    // Generate Dynamic QRIS via BRIAPI
    const qrisResult = await briApi.generateDynamicQris({
      partnerReferenceNo: reference,
      amount: amount,
      merchantName: merchantName || 'SANTARA SURABAYA',
      terminalId: 'SANTARA-SRB01',
    });

    return NextResponse.json({
      success: true,
      partnerReferenceNo: reference,
      referenceNo: qrisResult.referenceNo,
      qrContent: qrisResult.qrContent,
      amount: amount,
      escrowStatus: 'HELD_IN_ESCROW',
      message: 'QRIS Dinamis BRI berhasil diterbitkan. Dana ditahan aman di rekening penampung.',
    });
  } catch (error) {
    console.error('[API BRI QRIS] Error:', error);
    return NextResponse.json({ error: 'Gagal memproses QRIS BRIAPI' }, { status: 500 });
  }
}
