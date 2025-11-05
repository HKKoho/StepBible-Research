
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Gemini Bible Study Tool",
      "reference_selector_title": "Select a Bible Reference",
      "book": "Book",
      "chapter": "Chapter",
      "verse": "Verse",
      "feature_selector_title": "Select an Analysis Feature",
      "summary": "Summary",
      "explanation": "Explanation",
      "cross_references": "Cross-references",
      "original_language": "Original Language",
      "historical_context": "Historical Context",
      "character_analysis": "Character Analysis",
      "theological_insights": "Theological Insights",
      "personal_application": "Personal Application",
      "analyze": "Analyze",
      "analyzing": "Analyzing...",
      "result_title": "Analysis Result",
      "sources": "Sources",
      "history_title": "History",
      "play_audio": "Play Audio",
      "stop_audio": "Stop Audio",
      "loading_audio": "Loading Audio..."
    }
  },
  es: {
    translation: {
      "title": "Herramienta de Estudio Bíblico Gemini",
      "reference_selector_title": "Seleccione una Referencia Bíblica",
      "book": "Libro",
      "chapter": "Capítulo",
      "verse": "Versículo",
      "feature_selector_title": "Seleccione una Función de Análisis",
      "summary": "Resumen",
      "explanation": "Explicación",
      "cross_references": "Referencias Cruzadas",
      "original_language": "Idioma Original",
      "historical_context": "Contexto Histórico",
      "character_analysis": "Análisis de Personajes",
      "theological_insights": "Perspectivas Teológicas",
      "personal_application": "Aplicación Personal",
      "analyze": "Analizar",
      "analyzing": "Analizando...",
      "result_title": "Resultado del Análisis",
      "sources": "Fuentes",
      "history_title": "Historial",
      "play_audio": "Reproducir Audio",
      "stop_audio": "Detener Audio",
      "loading_audio": "Cargando Audio..."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
