import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://kayzpjoitfmoqdphsqga.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPERBASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtheXpwam9pdGZtb3FkcGhzcWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MTYyNzgsImV4cCI6MjA2NjE5MjI3OH0._iBUS6VzEAId_8MVzfuJV8-Bjbw0uQBkMI23Pc_ZKAc';
export const supabase = createClient(supabaseURL, supabaseAnonKey);
