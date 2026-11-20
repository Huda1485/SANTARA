import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY || 'dummy_api_key';
const genAI = new GoogleGenerativeAI(apiKey);

export interface MerchantSalesData {
  merchantName: string;
  category: string;
  weeklyRevenueCurrent: number;
  weeklyRevenuePrevious: number;
  topSellingItems: Array<{ name: string; qty: number; revenue: number }>;
  decliningItems: Array<{ name: string; dropPercentage: number }>;
  inventoryStatus: Array<{ commodity: string; remainingDays: number; currentStock: string }>;
  procurementCosts: {
    poultryCost: number;
    riceOilCost: number;
    spicesCost: number;
    totalHpp: number;
  };
}

export interface SantaraAiAnalysisResult {
  trendStatus: 'INCREASING' | 'STABLE' | 'DECREASING';
  growthPercentage: number;
  summaryExecutive: string;
  keyProblemsIdentified: string[];
  restockUrgency: Array<{
    commodity: string;
    action: string;
    recommendedProcurementType: 'SANTARA_GROUP' | 'SANTARA_DIRECT';
    estimatedSavings: string;
  }>;
  financialOptimization: {
    hppPercentageOfRevenue: number;
    isHealthy: boolean;
    costReductionTip: string;
  };
  linkUmkmRecommendation: {
    shouldTriggerModule: boolean;
    recommendedModuleTitle: string;
    linkUrl: string;
    reasoning: string;
  };
}

export async function analyzeMerchantBusinessPerformance(
  data: MerchantSalesData
): Promise<SantaraAiAnalysisResult> {
  // Hitung pertumbuhan omzet
  const growth = ((data.weeklyRevenueCurrent - data.weeklyRevenuePrevious) / data.weeklyRevenuePrevious) * 100;
  const hppRatio = (data.procurementCosts.totalHpp / data.weeklyRevenueCurrent) * 100;

  try {
    if (!process.env.GEMINI_API_KEY) {
      // Fallback deterministic analysis jika API key belum diatur di lokal
      return generateDeterministicFallback(data, growth, hppRatio);
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
      Anda adalah "Santara AI", asisten kecerdasan bisnis cerdas khusus mendampingi UMKM Kuliner tradisional di Kota Surabaya, Jawa Timur, bekerja sama dengan Bank BRI dan Pemkot Surabaya.
      Analisis data penjualan dan pengadaan bahan baku berikut:
      ${JSON.stringify(data, null, 2)}

      Hasilkan respons HANYA dalam format JSON valid sesuai struktur berikut (tanpa markdown backtick):
      {
        "trendStatus": "${growth >= 0 ? 'INCREASING' : 'DECREASING'}",
        "growthPercentage": ${growth.toFixed(1)},
        "summaryExecutive": "Ringkasan 2 kalimat ramah dalam bahasa Indonesia yang memotivasi pelaku usaha",
        "keyProblemsIdentified": ["masalah 1", "masalah 2"],
        "restockUrgency": [
          {
            "commodity": "nama komoditas",
            "action": "tindakan rekomendasi",
            "recommendedProcurementType": "SANTARA_GROUP atau SANTARA_DIRECT",
            "estimatedSavings": "estimasi penghematan dalam Rupiah"
          }
        ],
        "financialOptimization": {
          "hppPercentageOfRevenue": ${hppRatio.toFixed(1)},
          "isHealthy": ${hppRatio <= 65},
          "costReductionTip": "tips efisiensi biaya kulakan"
        },
        "linkUmkmRecommendation": {
          "shouldTriggerModule": ${hppRatio > 65 || growth < -10},
          "recommendedModuleTitle": "Modul Manajemen Biaya Produksi & HPP Kuliner",
          "linkUrl": "https://linkumkm.id",
          "reasoning": "alasan mengapa UMKM ini perlu mengikuti modul edukasi BRI"
        }
      }
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error('[Santara AI] Error generating analysis:', error);
    return generateDeterministicFallback(data, growth, hppRatio);
  }
}

function generateDeterministicFallback(
  data: MerchantSalesData,
  growth: number,
  hppRatio: number
): SantaraAiAnalysisResult {
  return {
    trendStatus: growth >= 0 ? 'INCREASING' : 'DECREASING',
    growthPercentage: parseFloat(growth.toFixed(1)),
    summaryExecutive: `Halo Bu Sri! Penjualan minggu ini tercatat ${growth >= 0 ? 'naik' : 'turun'} ${Math.abs(growth).toFixed(1)}% dengan total omzet Rp ${data.weeklyRevenueCurrent.toLocaleString('id-ID')}. Bahan beras terdeteksi menipis dalam 2 hari ke depan.`,
    keyProblemsIdentified: [
      'Penurunan pesanan pada menu Ayam Penyet Sambal Bawang di jam makan siang',
      'Rasio HPP bahan baku mencapai ' + hppRatio.toFixed(1) + '% dari total omzet penjualan (batas ideal < 65%)',
      'Stok beras tersisa untuk 2 hari operasional'
    ],
    restockUrgency: [
      {
        commodity: 'Beras Premium',
        action: 'Segera gabung kuota Santara Group Pasar Pucang sebelum H-1 Pukul 14.00 WIB',
        recommendedProcurementType: 'SANTARA_GROUP',
        estimatedSavings: 'Hemat Rp 140.000 / 100 kg'
      },
      {
        commodity: 'Cabai Rawit Merah',
        action: 'Beli langsung via Santara Direct dari Stan Cak Mat Pasar Keputran',
        recommendedProcurementType: 'SANTARA_DIRECT',
        estimatedSavings: 'Terkirim 30 menit via Opang Pasar'
      }
    ],
    financialOptimization: {
      hppPercentageOfRevenue: parseFloat(hppRatio.toFixed(1)),
      isHealthy: hppRatio <= 65,
      costReductionTip: 'Gabungkan belanja minyak dan beras ke supplier grosir untuk menekan HPP di bawah 60%.'
    },
    linkUmkmRecommendation: {
      shouldTriggerModule: hppRatio > 65 || growth < 0,
      recommendedModuleTitle: 'Pelatihan Manajemen Kas & Strategi Penentuan HPP Kuliner',
      linkUrl: 'https://linkumkm.id',
      reasoning: 'Rasio biaya bahan baku Anda saat ini berada di atas ambang batas wajar. Ikuti modul gratis LinkUMKM BRI untuk optimasi resep dan belanja bahan.'
    }
  };
}
