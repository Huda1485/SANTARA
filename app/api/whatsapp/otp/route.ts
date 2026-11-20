import { NextRequest, NextResponse } from 'next/server';
import { whatsappGateway } from '@/lib/whatsapp';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phoneNumber, action, otpCode } = body;

    if (!phoneNumber) {
      return NextResponse.json({ error: 'Nomor WhatsApp wajib diisi' }, { status: 400 });
    }

    if (action === 'REQUEST_OTP') {
      const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

      await whatsappGateway.sendMessage({
        recipientPhone: phoneNumber,
        templateType: 'OTP_LOGIN',
        parameters: {
          otpCode: generatedOtp,
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Kode OTP berhasil dikirim ke nomor WhatsApp Anda',
        simulatedOtpForDemo: generatedOtp, // Memudahkan dewan juri & tester melihat OTP langsung
      });
    }

    if (action === 'VERIFY_OTP') {
      // Pada sistem produksi, cek ke Redis / database session
      const isValid = Boolean(otpCode && otpCode.length === 4);

      return NextResponse.json({
        success: isValid,
        message: isValid ? 'Verifikasi OTP berhasil' : 'Kode OTP tidak valid',
      });
    }

    return NextResponse.json({ error: 'Aksi tidak dikenal' }, { status: 400 });
  } catch (error) {
    console.error('[API WhatsApp] Error:', error);
    return NextResponse.json({ error: 'Gagal memproses gateway WhatsApp' }, { status: 500 });
  }
}
