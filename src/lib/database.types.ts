export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          first_name: string | null
          last_name: string | null
          phone: string | null
          address: string | null
          postal_code: string | null
          city: string | null
          date_of_birth: string | null
          stripe_customer_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          address?: string | null
          postal_code?: string | null
          city?: string | null
          date_of_birth?: string | null
          stripe_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          address?: string | null
          postal_code?: string | null
          city?: string | null
          date_of_birth?: string | null
          stripe_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      membership_types: {
        Row: {
          id: string
          name: string
          description: string | null
          price_cents: number
          duration_days: number
          stripe_price_id: string | null
          is_recurring: boolean
          features: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price_cents: number
          duration_days: number
          stripe_price_id?: string | null
          is_recurring?: boolean
          features?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price_cents?: number
          duration_days?: number
          stripe_price_id?: string | null
          is_recurring?: boolean
          features?: Json | null
          created_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          membership_type_id: string
          stripe_subscription_id: string | null
          status: string
          start_date: string
          end_date: string | null
          cancelled_at: string | null
          cancellation_reason: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          membership_type_id: string
          stripe_subscription_id?: string | null
          status?: string
          start_date: string
          end_date?: string | null
          cancelled_at?: string | null
          cancellation_reason?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          membership_type_id?: string
          stripe_subscription_id?: string | null
          status?: string
          start_date?: string
          end_date?: string | null
          cancelled_at?: string | null
          cancellation_reason?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      invoices: {
        Row: {
          id: string
          user_id: string
          subscription_id: string | null
          stripe_invoice_id: string | null
          amount_cents: number
          status: string
          paid_at: string | null
          invoice_pdf_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          subscription_id?: string | null
          stripe_invoice_id?: string | null
          amount_cents: number
          status: string
          paid_at?: string | null
          invoice_pdf_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          subscription_id?: string | null
          stripe_invoice_id?: string | null
          amount_cents?: number
          status?: string
          paid_at?: string | null
          invoice_pdf_url?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
