(function () {
  // ─────────────────────────────────────────────────────────────
  // EN
  // ─────────────────────────────────────────────────────────────
  const en = {
    /* chrome / global */
    branding: 'NYLL · AI Adoption OS',
    page_title: 'NYLL AI Adoption OS — Program Dashboard',
    page_heading: 'Program Dashboard — AI Adoption OS',
    refresh: 'Refresh',
    live: 'Live',
    syncing: 'Syncing…',
    loading_message: 'Fetching live data from Notion…',
    unable_load: 'Unable to load data',
    retry: 'Retry',
    err_no_data: 'No data returned by the API.',
    unknown_error: 'Unknown error',
    no_chart_data: 'No data for chart.',
    untitled: 'Untitled',
    unclassified: 'Unclassified',

    /* nav */
    nav_pulse: '📊 Program Pulse',
    nav_frictions: '🔥 Frictions',
    nav_habits: '🔁 Habits',
    nav_ai_tasks: '🤖 AI Tasks',
    nav_value: '💰 Value',
    nav_w2v: '🔗 Waste-to-Value',
    nav_pipeline: '🔮 Pipeline',

    /* sections */
    section_pulse_title: 'Program Pulse',
    section_pulse_subtitle: 'Snapshot of the value creation chain — live from Notion.',
    section_frictions_title: 'Frictions Heatmap',
    section_frictions_subtitle: 'Each card = one friction · X axis: Waste Type · Y axis: Severity',
    section_habits_title: 'Habits anchored',
    section_habits_subtitle: 'What the team actually does differently today because of the AI.',
    section_ai_tasks_title: 'AI Tasks in regular use',
    section_ai_tasks_subtitle: 'How work has changed — tasks where the AI is embedded in recurring execution.',
    section_value_title: 'Value Heatmap',
    section_value_subtitle: 'Each card = one VAL entry · X axis: NIU intensity · Y axis: confidence level',
    section_w2v_title: 'Waste-to-Value',
    section_w2v_subtitle: 'How each type of waste traces through to value creation — via Habits, AI Tasks, and NIU Score.',
    section_pipeline_title: 'Value pipeline',
    section_pipeline_subtitle: 'What the program is about to produce.',

    /* KPIs */
    kpi_frictions: 'Frictions identified',
    kpi_frictions_sub: 'all entries',
    kpi_habits: 'Habits active',
    kpi_habits_sub: 'Decision: Keep or Adjust',
    kpi_ai_tasks: 'AI Tasks identified',
    kpi_ai_tasks_sub: 'all entries',
    kpi_niu_avg: 'NIU avg',
    kpi_niu_sub: '{count} validated · {total} total',

    /* NIU */
    badge_validated: '✓ Validated',
    badge_pending: '⏳ Pending',
    niu_breakdown: 'NIU Breakdown',
    niu_total: 'NIU Total',
    niu_score_label: 'NIU Score →',
    niu_validated_summary_one: 'Sum of each NIU dimension — {count} validated entry',
    niu_validated_summary_other: 'Sum of each NIU dimension — {count} validated entries',
    niu_pending_summary_one: 'Sum of each NIU dimension — {count} non-validated entry',
    niu_pending_summary_other: 'Sum of each NIU dimension — {count} non-validated entries',
    dim_fe: 'Financial Efficiency',
    dim_es: 'Execution Speed',
    dim_rg: 'Risk & Governance',
    dim_ha: 'Human & Adoption Impact',
    niu_emerging: 'Emerging',
    niu_building: 'Building',
    niu_anchored: 'Anchored',
    niu_maximum: 'Maximum',
    niu_label_maximum_signal: 'Maximum signal',
    niu_label_anchored_value: 'Anchored value',
    niu_label_building_value: 'Building value',
    niu_label_emerging_value: 'Emerging value',

    /* value chain */
    value_chain_title: 'Value Chain — Validated Value Paths',
    value_chain_subtitle: 'One row per Validated Value — traced back to originating Frictions',
    col_friction: 'Friction',
    col_habit: 'Habit',
    col_ai_task: 'AI Task',
    col_value_niu: 'Value + NIU',
    no_validated_values: 'No validated values found.',
    no_value_data: 'No value data found.',

    /* frictions / value heatmaps */
    impact_legend: 'Impact →',
    confidence: 'confidence',
    confidence_level_label: '{level} confidence',
    confidence_unset: 'Confidence not set',
    confidence_prefix: 'Confidence: {level}',

    /* habits */
    before: 'Before',
    after: 'After',
    before_prefix: 'Before: ',
    pdca_cycle: 'PDCA Cycle {cycle}',

    /* ai tasks */
    before_ai: 'Before AI',
    ai_contribution: 'AI contribution',
    human_role_after_ai: 'Human role after AI',

    /* w2v */
    frictions_label: 'Frictions',
    habits_label: 'Habits',
    ai_tasks_label: 'AI Tasks',
    value_entries_label: 'Value entries',
    value_label: 'Value',
    avg_niu_label: 'Avg NIU',
    no_data: 'No data',

    /* pipeline */
    pipeline_value_pending: 'Value pending validation',
    pipeline_pdca_progress: 'PDCA experiments in progress',

    /* ── domain enums (Notion values) — unknown values fall back to raw ── */
    enum: {
      severity:   { High: 'High', Medium: 'Medium', Low: 'Low' },
      status:     { Observed: 'Observed', Addressed: 'Addressed', Resolved: 'Resolved', Monitoring: 'Monitoring' },
      result:     { Observed: 'Observed', Partial: 'Partial', 'Not observed': 'Not observed', Pending: 'Pending' },
      decision:   { Keep: 'Keep', Adjust: 'Adjust', Drop: 'Drop', Pending: 'Pending' },
      frequency:  { Daily: 'Daily', Weekly: 'Weekly', Monthly: 'Monthly', 'Ad hoc': 'Ad hoc' },
      sponsor:    { Validated: 'Validated', 'In Review': 'In Review', 'On Hold': 'On Hold', 'Needs revision': 'Needs revision', Pending: 'Pending' },
      waste:      { Overhead: 'Overhead', 'Idle Time': 'Idle Time', Rework: 'Rework', 'Scope Creep': 'Scope Creep' },
      impact:     { Time: 'Time', Risk: 'Risk', Quality: 'Quality' },
      confidence: { High: 'High', Medium: 'Medium', Low: 'Low' },
      valueType:  { Time: 'Time', Quality: 'Quality', Cost: 'Cost', Risk: 'Risk' },
      area:       { Governance:'Governance', Meetings:'Meetings', Planning:'Planning', Scope:'Scope', Delivery:'Delivery', Reporting:'Reporting', Onboarding:'Onboarding' },
      capability: {},
    },
  };

  // ─────────────────────────────────────────────────────────────
  // FR
  // ─────────────────────────────────────────────────────────────
  const fr = {
    branding: "NYLL · OS d'adoption IA",
    page_title: 'NYLL AI Adoption OS — Tableau de bord du programme',
    page_heading: 'Tableau de bord du programme — AI Adoption OS',
    refresh: 'Actualiser',
    live: 'En direct',
    syncing: 'Synchronisation…',
    loading_message: 'Récupération des données live depuis Notion…',
    unable_load: 'Impossible de charger les données',
    retry: 'Réessayer',
    err_no_data: "Aucune donnée retournée par l'API.",
    unknown_error: 'Erreur inconnue',
    no_chart_data: 'Aucune donnée pour le graphique.',
    untitled: 'Sans titre',
    unclassified: 'Non classé',

    nav_pulse: '📊 Indicateurs',
    nav_frictions: '🔥 Frictions',
    nav_habits: '🔁 Habitudes',
    nav_ai_tasks: '🤖 Tâches IA',
    nav_value: '💰 Valeur',
    nav_w2v: '🔗 Gaspillage → Valeur',
    nav_pipeline: '🔮 Pipeline',

    section_pulse_title: 'Indicateurs du programme',
    section_pulse_subtitle: 'Aperçu de la chaîne de création de valeur — live depuis Notion.',
    section_frictions_title: 'Carte thermique des frictions',
    section_frictions_subtitle: 'Chaque carte = une friction · Axe X : Type de waste · Axe Y : Sévérité',
    section_habits_title: 'Habitudes ancrées',
    section_habits_subtitle: "Ce que l'équipe fait différemment aujourd'hui grâce à l'IA.",
    section_ai_tasks_title: 'Tâches IA en usage régulier',
    section_ai_tasks_subtitle: "Comment le travail a changé — tâches où l'IA est intégré à l'exécution récurrente.",
    section_value_title: 'Carte de valeur',
    section_value_subtitle: 'Chaque carte = une entrée VAL · Axe X : intensité NIU · Axe Y : niveau de confiance',
    section_w2v_title: 'De la friction à la valeur',
    section_w2v_subtitle: 'Comment chaque type de waste se répercute sur la création de valeur — via Habitudes, Tâches IA et score NIU.',
    section_pipeline_title: 'Pipeline de valeur',
    section_pipeline_subtitle: "Ce que le programme s'apprête à produire.",

    kpi_frictions: 'Frictions identifiées',
    kpi_frictions_sub: 'toutes les entrées',
    kpi_habits: 'Habitudes actives',
    kpi_habits_sub: 'Décision : Conserver ou Ajuster',
    kpi_ai_tasks: 'Tâches IA identifiées',
    kpi_ai_tasks_sub: 'toutes les entrées',
    kpi_niu_avg: 'NIU moy',
    kpi_niu_sub: '{count} validé(s) · {total} au total',

    badge_validated: '✓ Validé',
    badge_pending: '⏳ En attente',
    niu_breakdown: 'Répartition NIU',
    niu_total: 'Total NIU',
    niu_score_label: 'Score NIU →',
    niu_validated_summary_one: 'Somme de chaque dimension NIU — {count} entrée validée',
    niu_validated_summary_other: 'Somme de chaque dimension NIU — {count} entrées validées',
    niu_pending_summary_one: 'Somme de chaque dimension NIU — {count} entrée non validée',
    niu_pending_summary_other: 'Somme de chaque dimension NIU — {count} entrées non validées',
    dim_fe: 'Efficacité financière',
    dim_es: "Vitesse d'exécution",
    dim_rg: 'Risque et gouvernance',
    dim_ha: "Impact humain et d'adoption",
    niu_emerging: 'Émergent',
    niu_building: 'En développement',
    niu_anchored: 'Ancré',
    niu_maximum: 'Maximum',
    niu_label_maximum_signal: 'Signal maximum',
    niu_label_anchored_value: 'Valeur ancrée',
    niu_label_building_value: 'Valeur en construction',
    niu_label_emerging_value: 'Valeur émergente',

    value_chain_title: 'Chaîne de valeur — parcours de valeur validés',
    value_chain_subtitle: "Une ligne par valeur validée — remontée jusqu'aux frictions d'origine",
    col_friction: 'Friction',
    col_habit: 'Habitude',
    col_ai_task: 'Tâche IA',
    col_value_niu: 'Valeur + NIU',
    no_validated_values: 'Aucune valeur validée trouvée.',
    no_value_data: 'Aucune donnée de valeur trouvée.',

    impact_legend: 'Impact →',
    confidence: 'confiance',
    confidence_level_label: 'Confiance {level}',
    confidence_unset: 'Confiance non renseignée',
    confidence_prefix: 'Confiance : {level}',

    before: 'Avant',
    after: 'Après',
    before_prefix: 'Avant : ',
    pdca_cycle: 'Cycle PDCA {cycle}',

    before_ai: 'Avant IA',
    ai_contribution: "Contribution de l'IA",
    human_role_after_ai: "Rôle humain après l'IA",

    frictions_label: 'Frictions',
    habits_label: 'Habitudes',
    ai_tasks_label: 'Tâches IA',
    value_entries_label: 'Entrées de valeur',
    value_label: 'Valeur',
    avg_niu_label: 'NIU moy',
    no_data: 'Pas de données',

    pipeline_value_pending: 'Valeur en attente de validation',
    pipeline_pdca_progress: 'Expérimentations PDCA en cours',

    enum: {
      severity:   { High: 'Élevée', Medium: 'Moyenne', Low: 'Faible' },
      status:     { Observed: 'Observé', Addressed: 'Traité', Resolved: 'Résolu', Monitoring: 'Sous surveillance' },
      result:     { Observed: 'Observé', Partial: 'Partiel', 'Not observed': 'Non observé', Pending: 'En attente' },
      decision:   { Keep: 'Conserver', Adjust: 'Ajuster', Drop: 'Abandonner', Pending: 'En attente' },
      frequency:  { Daily: 'Quotidien', Weekly: 'Hebdomadaire', Monthly: 'Mensuel', 'Ad hoc': 'Ad hoc' },
      sponsor:    { Validated: 'Validé', 'In Review': 'En revue', 'On Hold': 'En pause', 'Needs revision': 'À réviser', Pending: 'En attente' },
      waste:      { Overhead:'Surcharge admininstrative', 'Idle Time':'Temps mort', Rework:'Retravail', 'Scope Creep':'Dérive de périmètre' },
      area:       { Governance:'Gouvernance', Meetings:'Réunions', Planning:'Planification', Scope:'Portée', Delivery:'Livraison', Reporting:'Reporting', Onboarding:'Intégration' },
      impact:     { Time: 'Temps', Risk: 'Risque', Quality: 'Qualité' },
      confidence: { High: 'élevée', Medium: 'moyenne', Low: 'faible' },
      valueType:  { Time: 'Temps', Quality: 'Qualité', Cost: 'Coût', Risk: 'Risque' },
      capability: {},
    },
  };

  window.TRANSLATIONS = { en, fr };
  window.I18N_DEFAULT_LANG = 'en';
  // passe à true en dev : les clés manquantes s'affichent ⟦comme.ceci⟧ au lieu d'être silencieuses
  window.I18N_DEBUG = false;

  // lookup unique, supporte les chemins pointés ("enum.severity.High")
  window.I18N_LOOKUP = function (lang, key) {
    const dict = window.TRANSLATIONS[lang];
    if (!dict) return undefined;
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    let cur = dict;
    for (const part of String(key).split('.')) {
      if (cur == null || typeof cur !== 'object') return undefined;
      cur = cur[part];
    }
    return typeof cur === 'string' ? cur : undefined;
  };

  window.CURRENT_LANG = window.CURRENT_LANG || window.I18N_DEFAULT_LANG;

  // conservé pour compatibilité (plus utilisé par les composants)
  window.getTranslation = function (key) {
    const v = window.I18N_LOOKUP(window.CURRENT_LANG, key);
    return v === undefined ? (window.I18N_LOOKUP('en', key) ?? key) : v;
  };
})();