import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper untuk mendengarkan perubahan kuota Santara Group (MOQ Pooling) secara Realtime
 */
export function subscribeToGroupOrder(orderId: string, onUpdate: (payload: any) => void) {
  return supabase
    .channel(`group-order-${orderId}`)
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'group_orders', filter: `id=eq.${orderId}` },
      (payload) => {
        onUpdate(payload.new);
      }
    )
    .subscribe();
}
