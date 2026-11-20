import { NextRequest, NextResponse } from 'next/server';
import { analyzeMerchantBusinessPerformance, MerchantSalesData } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Default mock data jika request tidak menyertakan payload lengkap (untuk kemudahan pengujian demo)
    const merchantData: MerchantSalesData = {
      merchantName: body.merchantName || 'Warung Bu Sri (Mulyorejo)',
      category: body.category || 'Penyetan & Ayam Goreng',
      weeklyRevenueCurrent: body.weeklyRevenueCurrent || 4350000,
      weeklyRevenuePrevious: body.weeklyRevenuePrevious || 4950000,
      topSellingItems: body.topSellingItems || [
        { name: 'Paket Ayam Penyet Sambal Bawang', qty: 145, revenue: 3190000 },
        { name: 'Es Teh Manis Jumbo', qty: 160, revenue: 800000 },
      ],
      decliningItems: body.decliningItems || [
        { name: 'Ayam Penyet Sambal Bawang', dropPercentage: 14.5 }
      ],
      inventoryStatus: body.inventoryStatus || [
        { commodity: 'Beras Premium', remainingDays: 2, currentStock: '15 kg' },
        { commodity: 'Daging Ayam', remainingDays: 1, currentStock: '8 kg' },
        { commodity: 'Minyak Goreng', remainingDays: 5, currentStock: '20 liter' },
      ],
      procurementCosts: body.procurementCosts || {
        poultryCost: 1650000,
        riceOilCost: 850000,
        spicesCost: 550000,
        totalHpp: 3050000, // ~70% dari omzet saat ini (cenderung boros)
      },
    };

    const aiReport = await analyzeMerchantBusinessPerformance(merchantData);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      report: aiReport,
    });
  } catch (error) {
    console.error('[API Santara AI] Error:', error);
    return NextResponse.json({ error: 'Gagal memproses analisis kecerdasan buatan' }, { status: 500 });
  }
}
