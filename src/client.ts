import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eeqorsxttevsnqgauyjs.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlcW9yc3h0dGV2c25xZ2F1eWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NjAwMTAsImV4cCI6MjAxNDIzNjAxMH0.OXq2MKSsIuaZH4s7y5canu1MrEiK11n6qzBV660Wl1E";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
