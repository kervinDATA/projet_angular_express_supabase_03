require('dotenv').config();  // Charger les variables d'environnement à partir du fichier .env
const { createClient } = require('@supabase/supabase-js');

// Charger les configurations à partir des variables d'environnement
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// Créer et exporter la connexion à Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = {
    supabase,
    PORT: process.env.PORT || 3000,  // Exporter aussi le port si besoin
};
