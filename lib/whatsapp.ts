/**
 * SANTARA WhatsApp Gateway Service
 * Layanan komunikasi langsung ke pedagang pasar tradisional & UMKM Surabaya
 */

export interface WhatsAppNotificationPayload {
  recipientPhone: string;
  templateType: 'OTP_LOGIN' | 'MOQ_LAST_CALL' | 'SUPPLIER_NEW_ORDER' | 'PICKUP_READY';
  parameters: Record<string, string>;
}

export class WhatsAppGatewayService {
  private apiUrl: string;
  private apiToken: string;

  constructor() {
    this.apiUrl = process.env.WHATSAPP_API_URL || 'https://api.fonnte.com/send';
    this.apiToken = process.env.WHATSAPP_API_TOKEN || 'dummy_fonnte_token';
  }

  async sendMessage(payload: WhatsAppNotificationPayload): Promise<{ success: boolean; messageId?: string }> {
    const formattedMessage = this.buildMessageTemplate(payload.templateType, payload.parameters);
    
    console.log(`[WhatsApp Gateway] Sending to ${payload.recipientPhone}: \n${formattedMessage}`);

    try {
      if (!process.env.WHATSAPP_API_TOKEN) {
        // Mode development simulasi
        return { success: true, messageId: 'simulated_msg_' + Date.now() };
      }

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': this.apiToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          target: payload.recipientPhone,
          message: formattedMessage,
        }),
      });

      const result = await response.json();
      return { success: result.status === true, messageId: result.id };
    } catch (error) {
      console.error('[WhatsApp Gateway] Error sending message:', error);
      return { success: false };
    }
  }

  private buildMessageTemplate(type: string, params: Record<string, string>): string {
    switch (type) {
      case 'OTP_LOGIN':
        return `[SANTARA.ID] Kode OTP masuk akun Anda adalah: *${params.otpCode}*. Jangan berikan kode ini kepada siapapun demi keamanan rekening dan akun bisnis Anda.`;

      case 'MOQ_LAST_CALL':
        return `*PERINGATAN KUOTA SANTARA GROUP*\nHalo ${params.merchantName}, pengadaan kolektif komoditas *${params.commodity}* saat ini sudah terkumpul *${params.currentKg}/${params.targetKg} kg*.\n\nKurang *${params.remainingKg} kg* lagi sebelum cut-off pukul 14.00 WIB untuk mengunci harga murah Rp${params.targetPrice}/kg! Buka link web berikut untuk bergabung: https://santara.id/dashboard`;

      case 'SUPPLIER_NEW_ORDER':
        return `*PESANAN BARU SANTARA DIRECT*\nHalo ${params.supplierName} (${params.marketName}), ada pesanan baru:\n- Komoditas: *${params.commodity}*\n- Jumlah: *${params.qtyKg} kg*\n- Total: *Rp${params.totalPrice}*\n- Tujuan: ${params.merchantDestination}\n\nBalas pesan ini ketik *SIAP* untuk konfirmasi dalam 15 menit. Dana terjamin aman di rekening penampung BRI.`;

      case 'PICKUP_READY':
        return `*PAKET SIAP DIAMBIL DI AGENBRILINK*\nHalo ${params.customerName}, pesanan Anda *${params.orderCode}* dari *${params.merchantName}* sudah sampai di Titik Jemput *${params.agenBriName}*.\n\nBatas ambil maksimal: ${params.deadlineTime}. Tunjukkan kode *${params.orderCode}* ke petugas loket.`;

      default:
        return `[SANTARA.ID] Notifikasi operasional pengadaan UMKM Surabaya.`;
    }
  }
}

export const whatsappGateway = new WhatsAppGatewayService();
