import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Home.module.css'

interface App {
  name: string
  description: string
  icon?: string
  image?: string
  badge?: string
  gradient: string
  url: string
}

interface AppCategory {
  label: string
  items: App[]
}

const appCategories: AppCategory[] = [
  {
    label: 'Mobile',
    items: [
      {
        name: '무엇이든 소라고동',
        description: '고민될 때 소라고동을\n당기면 답을 들려줍니다.',
        image: '/images/ic-sora.png',
        gradient: 'linear-gradient(135deg, #007aff, #5856d6)',
        url: '',
        badge: 'Coming Soon',
      },
      {
        name: '연락처 백업',
        description: '연락처를 안전하게\n백업하고 복원하세요.',
        image: '/images/ic-contact.png',
        gradient: 'linear-gradient(135deg, #34c759, #30d158)',
        url: 'https://play.google.com/store/apps/details?id=com.canbe.contactbackup',
      },
      {
        name: '비가드',
        description: '개인정보 관리 꿀팁',
        image: '/images/ic-beguard.png',
        gradient: 'linear-gradient(135deg, #ff3b30, #ff6482)',
        url: 'https://play.google.com/store/apps/details?id=com.aos.android.passguard',
      },
      {
        name: '좋은 생각 카드',
        description: '명언, 동기부여, 고민해결',
        image: '/images/ic-good-idea.png',
        gradient: 'linear-gradient(135deg, #d1d1d6, #a1a1a6)',
        url: 'https://play.google.com/store/apps/details?id=com.aos.goodideacard',
      },
    ],
  },
  {
    label: 'Web',
    items: [
      {
        name: '각종 웹사이트',
        description: '제품 랜딩 페이지 &\n프로모션 사이트',
        image: '/images/ic-browser.svg',
        gradient: 'linear-gradient(135deg, #1d1d1f, #424245)',
        url: '',
      },
    ],
  },
  {
    label: 'Desktop',
    items: [
      {
        name: 'AI 투자 솔루션',
        description: 'AI 멀티 에이전트 주식 분석',
        image: '/images/ic-ai-stock-solution.png',
        gradient: 'linear-gradient(135deg, #007aff, #5856d6)',
        url: 'https://hyunjunepark.github.io/ai-stock-analyst-download-page',
      },
    ],
  },
]

interface Skill {
  name: string
  bg: string
  color: string
}

interface SkillGroup {
  category: string
  skills: Skill[]
}

const techStack: SkillGroup[] = [
  {
    category: 'Language',
    skills: [
      { name: 'TypeScript', bg: '#3178c6', color: '#fff' },
      { name: 'JavaScript', bg: '#f7df1e', color: '#000' },
      { name: 'Kotlin', bg: '#7f52ff', color: '#fff' },
      { name: 'Java', bg: '#ed8b00', color: '#fff' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', bg: '#222', color: '#61dafb' },
    ],
  },
  {
    category: 'Mobile & Desktop',
    skills: [
      { name: 'Android', bg: '#3ddc84', color: '#000' },
      { name: 'React Native', bg: '#282c34', color: '#61dafb' },
      { name: 'Electron', bg: '#47848f', color: '#fff' },
    ],
  },
  {
    category: 'Backend & DB',
    skills: [
      { name: 'Node.js', bg: '#339933', color: '#fff' },
      { name: 'Spring Boot', bg: '#6db33f', color: '#fff' },
      { name: 'MySQL', bg: '#4479a1', color: '#fff' },
    ],
  },
  {
    category: 'Cloud & Infra',
    skills: [
      { name: 'AWS', bg: '#ff9900', color: '#000' },
      { name: 'Firebase', bg: '#ffca28', color: '#000' },
      { name: 'Docker', bg: '#2496ed', color: '#fff' },
    ],
  },
  {
    category: 'CI/CD',
    skills: [
      { name: 'Jenkins', bg: '#d24939', color: '#fff' },
      { name: 'GitHub Actions', bg: '#2088ff', color: '#fff' },
    ],
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />

      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Creative Studio</p>
        <h1 className={styles.title}>Mori Studio</h1>
        <p className={styles.subtitle}>
          아이디어를 서비스로<br/>더 나은 경험을 만듭니다.
        </p>
      </section>

      {/* Products */}
      <section id="products" className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Products</h2>

          {/* Mobile - 4열 */}
          <div className={styles.appCategory}>
            <h3 className={styles.appCategoryLabel}>Mobile</h3>
            <div className={styles.appGrid4}>
              {appCategories[0].items.map((app) => {
                const card = (
                  <>
                    {app.image ? (
                      <img src={app.image} alt={app.name} className={styles.appIconImg} />
                    ) : (
                      <div className={styles.appIcon} style={{ background: app.gradient }}>
                        <span>{app.icon}</span>
                      </div>
                    )}
                    <h3 className={styles.appName}>{app.name}</h3>
                    <p className={styles.appDesc}>{app.description}</p>
                    <span className={styles.appLink}>{app.url ? '자세히 보기 →' : '\u00A0'}</span>
                  </>
                )
                const cardEl = app.url ? (
                  <a href={app.url} target="_blank" rel="noopener noreferrer" className={styles.appCard}>
                    {card}
                  </a>
                ) : (
                  <div className={styles.appCard}>
                    {card}
                  </div>
                )
                return (
                  <div key={app.name} className={styles.appCardWrap}>
                    {cardEl}
                    {app.badge && (
                      <div className={styles.badgeOverlay}>
                        <span className={styles.badge}>{app.badge}</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Web + Desktop - 2열 */}
          <div className={styles.appRow}>
            {appCategories.slice(1).map((category) => (
              <div key={category.label} className={styles.appCategory}>
                <h3 className={styles.appCategoryLabel}>{category.label}</h3>
                {category.items.map((app) =>
                  app.url ? (
                    <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer" className={styles.appCard}>
                      {app.image ? (
                        <img src={app.image} alt={app.name} className={styles.appIconImg} />
                      ) : (
                        <div className={styles.appIcon} style={{ background: app.gradient }}>
                          <span>{app.icon}</span>
                        </div>
                      )}
                      <h3 className={styles.appName}>{app.name}</h3>
                      <p className={styles.appDesc}>{app.description}</p>
                      <span className={styles.appLink}>자세히 보기 →</span>
                    </a>
                  ) : (
                    <div key={app.name} className={styles.appCard}>
                      {app.image ? (
                        <img src={app.image} alt={app.name} className={styles.appIconImg} />
                      ) : (
                        <div className={styles.appIcon} style={{ background: app.gradient }}>
                          <span>{app.icon}</span>
                        </div>
                      )}
                      <h3 className={styles.appName}>{app.name}</h3>
                      <p className={styles.appDesc}>{app.description}</p>
                      <span className={styles.appLink}>&nbsp;</span>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={styles.sectionWhite}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Skills</h2>

          <div className={styles.skillGrid}>
            {techStack.map((group) => (
              <div key={group.category} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{group.category}</h3>
                <div className={styles.skillTags}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={styles.skillTag}
                      style={{ backgroundColor: skill.bg, color: skill.color }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Contact</h2>

          <p className={styles.contactDesc}>프로젝트 제안, 협업 문의, 기타 궁금한 점이 있으시면 연락해 주세요.</p>
          <a href="mailto:contact@example.com" className={styles.contactLink}>
            <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
            <span>contact@example.com</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
