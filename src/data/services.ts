import { Code, Smartphone, Monitor, AppWindow, Camera, MessageSquare, Bot, Cpu, Search, Share2, Instagram, Facebook, PlaySquare } from 'lucide-react';

export const serviceData: Record<string, any> = {
  'web-apps': {
    id: 'web-apps',
    icon: Code,
    title: 'Web Application Development',
    titleAr: 'تطوير تطبيقات الويب',
    description: 'Scalable, secure, and high-performance web applications tailored to your business needs. We build enterprise-grade solutions that drive growth and efficiency.',
    descriptionAr: 'تطبيقات ويب قابلة للتطوير وآمنة وعالية الأداء مصممة خصيصًا لتلبية احتياجات عملك. نحن نبني حلولًا على مستوى المؤسسات تدفع عجلة النمو والكفاءة.',
    features: [
      'Custom Business Logic', 'API Integration & Development', 'Real-time Data Processing', 'Cloud-Native Architecture', 'High Security Standards', 'Scalable Infrastructure'
    ],
    featuresAr: [
      'منطق أعمال مخصص', 'تطوير ودمج واجهات برمجة التطبيقات', 'معالجة البيانات في الوقت الفعلي', 'بنية سحابية أصلية', 'معايير أمان عالية', 'بنية تحتية قابلة للتطوير'
    ],
    techStack: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
    ]
  },
  'websites': {
    id: 'websites',
    icon: Monitor,
    title: 'Website Development',
    titleAr: 'تطوير المواقع الإلكترونية',
    description: 'Stunning, responsive websites designed to convert visitors into customers. From custom builds to powerful CMS platforms, we deliver digital experiences that stand out.',
    descriptionAr: 'مواقع إلكترونية مذهلة ومتجاوبة مصممة لتحويل الزوار إلى عملاء. من البناء المخصص إلى منصات إدارة المحتوى القوية، نقدم تجارب رقمية متميزة.',
    features: [
      'Responsive Design', 'SEO Optimized Structure', 'Fast Loading Speeds', 'E-commerce Integration', 'Content Management Systems', 'Analytics Setup'
    ],
    featuresAr: [
      'تصميم متجاوب', 'هيكل محسن لمحركات البحث', 'سرعات تحميل سريعة', 'دمج التجارة الإلكترونية', 'أنظمة إدارة المحتوى', 'إعداد التحليلات'
    ],
    techStack: [
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
    ]
  },
  'seo-optimization': {
    id: 'seo-optimization',
    icon: Search,
    title: 'SEO Optimization',
    titleAr: 'تحسين محركات البحث (SEO)',
    description: 'Data-driven SEO strategies to rank your website higher on search engines, drive targeted organic traffic, and increase your digital visibility and conversions.',
    descriptionAr: 'استراتيجيات تحسين محركات البحث المبنية على البيانات لرفع تصنيف موقعك على محركات البحث، وجذب زيارات عضوية مستهدفة، وزيادة ظهورك الرقمي وتحويلاتك.',
    features: [
      'Keyword Research & Strategy', 'On-Page SEO Optimization', 'Technical SEO Audits', 'Link Building Campaigns', 'Local SEO & GMB', 'Performance Reporting'
    ],
    featuresAr: [
      'البحث عن الكلمات المفتاحية واستراتيجيتها', 'تحسين محركات البحث داخل الصفحة', 'تدقيق تقني لمحركات البحث', 'حملات بناء الروابط', 'تحسين محركات البحث المحلية', 'تقارير الأداء'
    ],
    pricing: [
      {
        name: 'Starter SEO',
        nameAr: 'البداية',
        price: 'SAR 2,500',
        period: '/month',
        periodAr: '/شهر',
        features: ['Keyword Research (Up to 20)', 'On-Page Optimization (5 pages)', 'Basic Technical Audit', 'Monthly Reporting'],
        featuresAr: ['بحث عن الكلمات المفتاحية (حتى 20)', 'تحسين داخل الصفحة (5 صفحات)', 'تدقيق تقني أساسي', 'تقارير شهرية']
      },
      {
        name: 'Growth SEO',
        nameAr: 'النمو',
        price: 'SAR 5,000',
        period: '/month',
        periodAr: '/شهر',
        features: ['Keyword Research (Up to 50)', 'On-Page Optimization (15 pages)', 'Advanced Technical Audit', 'Content Strategy (2 blogs/mo)', 'Local SEO Setup', 'Bi-weekly Reporting'],
        featuresAr: ['بحث عن الكلمات المفتاحية (حتى 50)', 'تحسين داخل الصفحة (15 صفحة)', 'تدقيق تقني متقدم', 'استراتيجية المحتوى (مقالين/شهر)', 'إعداد تحسين محركات البحث المحلية', 'تقارير نصف شهرية'],
        popular: true
      },
      {
        name: 'Enterprise SEO',
        nameAr: 'المؤسسات',
        price: 'SAR 10,000+',
        period: '/month',
        periodAr: '/شهر',
        features: ['Comprehensive Keyword Strategy', 'Full Site Optimization', 'Continuous Technical SEO', 'Content Strategy (4+ blogs/mo)', 'Aggressive Link Building', 'Custom Dashboard & Weekly Calls'],
        featuresAr: ['استراتيجية شاملة للكلمات المفتاحية', 'تحسين كامل للموقع', 'تحسين تقني مستمر', 'استراتيجية المحتوى (4+ مقالات/شهر)', 'بناء روابط قوي', 'لوحة تحكم مخصصة ومكالمات أسبوعية']
      }
    ]
  },
  'mobile-apps': {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile App Development',
    titleAr: 'تطوير تطبيقات الجوال',
    description: 'High-performance iOS and Android applications that deliver a seamless mobile experience. We build native and cross-platform apps that engage users and drive results.',
    descriptionAr: 'تطبيقات iOS و Android عالية الأداء تقدم تجربة جوال سلسة. نحن نبني تطبيقات أصلية وعبر المنصات تجذب المستخدمين وتحقق النتائج.',
    features: ['iOS & Android Development', 'Cross-Platform Solutions', 'UI/UX Design', 'API Integration', 'App Store Optimization', 'Maintenance & Support'],
    featuresAr: ['تطوير iOS و Android', 'حلول عبر المنصات', 'تصميم واجهة وتجربة المستخدم', 'دمج واجهات برمجة التطبيقات', 'تحسين متجر التطبيقات', 'صيانة ودعم'],
    techStack: [
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' }
    ]
  },
  'software-applications': {
    id: 'software-applications',
    icon: AppWindow,
    title: 'Custom Software Applications',
    titleAr: 'تطبيقات برمجية مخصصة',
    description: 'Custom software solutions designed to automate and streamline your enterprise operations. We build robust systems that solve complex business challenges.',
    descriptionAr: 'حلول برمجية مخصصة مصممة لأتمتة وتبسيط عمليات مؤسستك. نحن نبني أنظمة قوية تحل تحديات الأعمال المعقدة.',
    features: ['Enterprise Software', 'Workflow Automation', 'Legacy System Modernization', 'Custom Dashboards', 'SaaS Development', 'System Integration'],
    featuresAr: ['برمجيات المؤسسات', 'أتمتة سير العمل', 'تحديث الأنظمة القديمة', 'لوحات تحكم مخصصة', 'تطوير البرمجيات كخدمة (SaaS)', 'تكامل الأنظمة'],
    techStack: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
    ]
  },
  'ai-product-shoot': {
    id: 'ai-product-shoot',
    icon: Camera,
    title: 'AI Product Shoot',
    titleAr: 'تصوير المنتجات بالذكاء الاصطناعي',
    description: 'Generate professional, photorealistic product photography using advanced AI. Save time and money on traditional photoshoots while getting stunning visuals.',
    descriptionAr: 'قم بإنشاء صور احترافية وواقعية للمنتجات باستخدام الذكاء الاصطناعي المتقدم. وفر الوقت والمال في جلسات التصوير التقليدية مع الحصول على صور مذهلة.',
    features: ['Photorealistic Generation', 'Multiple Backgrounds', 'Lighting Adjustment', 'High-Resolution Output', 'Fast Turnaround', 'Cost-Effective'],
    featuresAr: ['توليد صور واقعية', 'خلفيات متعددة', 'تعديل الإضاءة', 'مخرجات عالية الدقة', 'تسليم سريع', 'فعال من حيث التكلفة']
  },
  'ai-chatbots': {
    id: 'ai-chatbots',
    icon: MessageSquare,
    title: 'AI Chatbots',
    titleAr: 'روبوتات الدردشة بالذكاء الاصطناعي',
    description: 'Intelligent conversational agents to automate customer support and sales. Provide 24/7 assistance and improve customer satisfaction with our advanced AI chatbots.',
    descriptionAr: 'وكلاء محادثة أذكياء لأتمتة دعم العملاء والمبيعات. قدم مساعدة على مدار الساعة طوال أيام الأسبوع وحسّن رضا العملاء باستخدام روبوتات الدردشة المتقدمة لدينا.',
    features: ['Natural Language Processing', '24/7 Availability', 'Multi-Language Support', 'CRM Integration', 'Lead Generation', 'Analytics Dashboard'],
    featuresAr: ['معالجة اللغة الطبيعية', 'توفر على مدار الساعة', 'دعم لغات متعددة', 'دمج مع نظام إدارة علاقات العملاء', 'توليد العملاء المحتملين', 'لوحة تحكم للتحليلات']
  },
  'agentic-ai': {
    id: 'agentic-ai',
    icon: Bot,
    title: 'Agentic AI',
    titleAr: 'الذكاء الاصطناعي الوكيلي',
    description: 'Autonomous AI agents capable of complex reasoning and task execution. Automate multi-step workflows and empower your business with intelligent automation.',
    descriptionAr: 'وكلاء ذكاء اصطناعي مستقلون قادرون على التفكير المعقد وتنفيذ المهام. قم بأتمتة سير العمل متعدد الخطوات وتمكين عملك باستخدام الأتمتة الذكية.',
    features: ['Autonomous Task Execution', 'Complex Reasoning', 'Workflow Automation', 'Data Analysis', 'Decision Making', 'Continuous Learning'],
    featuresAr: ['تنفيذ المهام بشكل مستقل', 'تفكير معقد', 'أتمتة سير العمل', 'تحليل البيانات', 'اتخاذ القرارات', 'تعلم مستمر']
  },
  'ai-apps': {
    id: 'ai-apps',
    icon: Cpu,
    title: 'Custom AI Apps',
    titleAr: 'تطبيقات ذكاء اصطناعي مخصصة',
    description: 'Custom AI-powered applications designed to solve specific business challenges. Leverage the power of machine learning and generative AI for your unique needs.',
    descriptionAr: 'تطبيقات مخصصة مدعومة بالذكاء الاصطناعي مصممة لحل تحديات أعمال محددة. استفد من قوة التعلم الآلي والذكاء الاصطناعي التوليدي لتلبية احتياجاتك الفريدة.',
    features: ['Machine Learning Models', 'Generative AI Integration', 'Predictive Analytics', 'Computer Vision', 'Custom Algorithms', 'Scalable Deployment'],
    featuresAr: ['نماذج التعلم الآلي', 'دمج الذكاء الاصطناعي التوليدي', 'التحليلات التنبؤية', 'رؤية الكمبيوتر', 'خوارزميات مخصصة', 'نشر قابل للتطوير']
  },
  'social-media-marketing': {
    id: 'social-media-marketing',
    icon: Share2,
    title: 'Social Media Marketing',
    titleAr: 'التسويق عبر وسائل التواصل الاجتماعي',
    description: 'Targeted ad campaigns and marketing strategies across all major social platforms. Build brand awareness, engage your audience, and drive conversions.',
    descriptionAr: 'حملات إعلانية مستهدفة واستراتيجيات تسويق عبر جميع المنصات الاجتماعية الرئيسية. بناء الوعي بالعلامة التجارية، وإشراك جمهورك، ودفع التحويلات.',
    features: ['Strategy Development', 'Content Creation', 'Paid Advertising', 'Community Management', 'Influencer Marketing', 'Performance Analytics'],
    featuresAr: ['تطوير الاستراتيجية', 'إنشاء المحتوى', 'الإعلانات المدفوعة', 'إدارة المجتمع', 'التسويق عبر المؤثرين', 'تحليلات الأداء'],
    pricing: [
      {
        name: 'Basic Social',
        nameAr: 'الأساسي',
        price: 'SAR 3,000',
        period: '/month',
        periodAr: '/شهر',
        features: ['2 Platforms', '12 Posts/month', 'Basic Community Management', 'Monthly Report'],
        featuresAr: ['منصتين', '12 منشور/شهر', 'إدارة مجتمع أساسية', 'تقرير شهري']
      },
      {
        name: 'Pro Social',
        nameAr: 'الاحترافي',
        price: 'SAR 6,000',
        period: '/month',
        periodAr: '/شهر',
        features: ['3 Platforms', '20 Posts/month', '4 Reels/month', 'Pro Community Management', 'Ad Campaign Setup', 'Bi-weekly Report'],
        featuresAr: ['3 منصات', '20 منشور/شهر', '4 ريلز/شهر', 'إدارة مجتمع احترافية', 'إعداد حملة إعلانية', 'تقرير نصف شهري'],
        popular: true
      },
      {
        name: 'Elite Social',
        nameAr: 'النخبة',
        price: 'SAR 12,000+',
        period: '/month',
        periodAr: '/شهر',
        features: ['All Platforms', 'Daily Posting', '8+ Reels/month', 'Full Community Management', 'Advanced Ad Campaigns', 'Influencer Outreach', 'Weekly Report'],
        featuresAr: ['جميع المنصات', 'نشر يومي', '8+ ريلز/شهر', 'إدارة مجتمع كاملة', 'حملات إعلانية متقدمة', 'التواصل مع المؤثرين', 'تقرير أسبوعي']
      }
    ]
  },
  'instagram-management': {
    id: 'instagram-management',
    icon: Instagram,
    title: 'Instagram Management',
    titleAr: 'إدارة إنستغرام',
    description: 'Engaging visual content, reels, and community management for Instagram growth. Build a stunning feed and connect with your audience visually.',
    descriptionAr: 'محتوى مرئي جذاب، ريلز، وإدارة المجتمع لنمو إنستغرام. قم ببناء موجز مذهل وتواصل مع جمهورك بصريًا.',
    features: ['Visual Branding', 'Reels Creation', 'Story Management', 'Hashtag Strategy', 'Engagement Tactics', 'Monthly Reporting'],
    featuresAr: ['العلامة التجارية المرئية', 'إنشاء الريلز', 'إدارة القصص', 'استراتيجية الهاشتاج', 'تكتيكات التفاعل', 'تقارير شهرية']
  },
  'facebook-management': {
    id: 'facebook-management',
    icon: Facebook,
    title: 'Facebook Management',
    titleAr: 'إدارة فيسبوك',
    description: 'Strategic posting, audience engagement, and page optimization for Facebook. Reach a broader audience and build a loyal community.',
    descriptionAr: 'نشر استراتيجي، وتفاعل مع الجمهور، وتحسين الصفحة على فيسبوك. الوصول إلى جمهور أوسع وبناء مجتمع مخلص.',
    features: ['Page Optimization', 'Content Scheduling', 'Community Engagement', 'Ad Campaign Management', 'Group Management', 'Insights Analysis'],
    featuresAr: ['تحسين الصفحة', 'جدولة المحتوى', 'التفاعل مع المجتمع', 'إدارة الحملات الإعلانية', 'إدارة المجموعات', 'تحليل الرؤى']
  },
  'tiktok-management': {
    id: 'tiktok-management',
    icon: PlaySquare,
    title: 'TikTok Management',
    titleAr: 'إدارة تيك توك',
    description: 'Viral short-form video strategies and trend-driven content creation for TikTok. Capture the attention of the next generation of consumers.',
    descriptionAr: 'استراتيجيات فيديو قصيرة سريعة الانتشار وإنشاء محتوى مدفوع بالاتجاهات على تيك توك. اجذب انتباه الجيل القادم من المستهلكين.',
    features: ['Trend Analysis', 'Video Production', 'Creative Direction', 'Influencer Collaboration', 'Hashtag Challenges', 'Growth Tracking'],
    featuresAr: ['تحليل الاتجاهات', 'إنتاج الفيديو', 'التوجيه الإبداعي', 'التعاون مع المؤثرين', 'تحديات الهاشتاج', 'تتبع النمو']
  }
};
