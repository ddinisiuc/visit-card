# Projects - Полное Описание

> **Мастер-документ:** Вся информация о проектах собранная из Q&A с клиентом, sprint reviews, и технической документации

---

# Phundhub — SME Lending Platform

## 📋 Общая Информация

**Клиент:** SME Lending Platform
**Период разработки:** 6 месяцев
**Роль:** Full-cycle Technical Lead (Architecture → Delivery)
**Размер команды:** 5 человек (backend, frontend, QA)
**Статус:** Delivered to production

### Бизнес-контекст
- **Сфера:** Кредитование малого и среднего бизнеса (МСБ)
- **Проблема:** Ручная оценка кредитов занимала дни, высокая нагрузка на аналитиков
- **Решение:** Автоматизированная платформа риск-ориентированных решений
- **Результат:** Сокращение времени принятия решений с дней до часов

---

## 🛠️ Технический Стек

### Backend
- **Framework:** Laravel (PHP)
- **Databases:** MySQL, PostgreSQL
- **API:** REST API architecture

### External Integrations
- **Zoho CRM** - центральная CRM система для учёта и отчётности
- **Experian API** - кредитный скоринг и анализ компаний в реальном времени
- **HelloSign** - электронное подписание документов и контрактов
- **Plaid** - верификация банковских данных и финансовой отчётности

---

## 🏗️ Архитектура Системы

### Ключевые компоненты

1. **Loan Calculation Engine**
   - Множественные графики платежей
   - Различные структуры процентных ставок
   - Автоматический расчёт погашения займов
   - Гибкие кредитные продукты без ручного пересчёта

2. **Risk Assessment Dashboard**
   - Интеграция Experian API для кредитного скоринга
   - Анализ компаний в реальном времени
   - Сокращение времени решений с дней до часов

3. **Company Data Enrichment Pipeline**
   - Автоматизированная due diligence через внешние API
   - Устранение 80% ручного сбора данных
   - Обогащение данных компаний для анализа

4. **Multi-Platform Synchronization**
   - Синхронизация между внутренней платформой и Zoho CRM
   - Queue-based batch обработка
   - Правила разрешения конфликтов

5. **Document Management**
   - HelloSign для электронного подписания
   - Workflow управления контрактами
   - Автоматизированная верификация документов

6. **Banking Integration**
   - Plaid API для верификации банковских данных
   - Валидация финансовой отчётности
   - Compliance проверки

---

## 🔥 Ключевые Technical Challenges

### 1. Complex Lending Domain Logic

**Проблема:**
- Сложная бизнес-логика расчётов займов, процентных ставок, графиков платежей
- Алгоритмы оценки рисков требуют глубокого понимания lending domain
- Непрерывная валидация с domain экспертами клиента

**Решение:**
- Deep immersion в бизнес кредитования
- Плотная работа с lending экспертами клиента
- Domain-Driven Development подход
- Валидация бизнес-правил на каждом этапе

**Impact:**
- Движок расчёта займов прошёл первый аудит без модификаций
- Бизнес-правила валидированы заранее
- Предотвратили дорогостоящие переделки

### 2. Multi-Platform Synchronization без Webhooks

**Проблема:**
- Надёжная консистентность данных между платформой и Zoho CRM
- Отсутствие webhooks или real-time sync от legacy системы
- Необходимость поддержки операций без простоя

**Решение:**
- Queue-based batch processing
- Правила разрешения конфликтов
- Асинхронная обработка

**Impact:**
- Достигнута надёжная консистентность данных
- Seamless синхронизация с Zoho CRM

### 3. Multiple External API Integrations

**Проблема:**
- Интеграция Experian (кредитный скоринг)
- Интеграция HelloSign (электронные подписи)
- Интеграция Plaid (банковские данные)
- Каждая требует fallback стратегий, обработки ошибок, управления rate limits

**Решение:**
- Abstraction layers для каждой интеграции
- Graceful error handling и fallbacks
- Rate limit management
- Resilient architecture

**Impact:** Stable multi-API platform with reliable external integrations

### 4. Full-Cycle Ownership

**Проблема:**
- Проект от чистого листа до production
- Требовалось проектирование архитектуры, UI/UX решения
- Выбор технологического стека
- Координация команды без reference implementations

**Решение:**
- Architecture First подход
- Solid system design перед реализацией
- Проектирование БД, API структуры, интеграций заранее
- Предотвращение costly rework

**Impact:**
- Zero database migrations во время разработки
- Начальный дизайн схемы покрыл все требования функционала
- Нет структурных изменений

---

## 📊 Процессы и Методология

### Development Process

**Duration:** 6 месяцев

**Phases:**

1. **Discovery & Architecture Design**
   - Понимание lending бизнес-требований
   - Regulatory ограничения
   - User workflows
   - Проектирование архитектуры, схемы БД, структуры API
   - Выбор tech stack

2. **Core Development & Integration**
   - Loan calculation engine
   - Risk assessment dashboard
   - Borrower/lender portals
   - Интеграция внешних API (Experian, HelloSign, Plaid)
   - Zoho CRM synchronization

3. **Testing & Refinement**
   - QA тестирование сложных lending сценариев
   - Валидация бизнес-логики с domain экспертами
   - UI/UX refinement на основе feedback
   - Regulatory compliance verification

4. **Delivery & Handoff**
   - Успешная поставка платформы
   - Документация и обучение
   - Final demos
   - Платформа стала operational tool

### Team Coordination

**Roles:**
- Backend developers
- Frontend developers
- QA team
- Team Lead (архитектурные решения, координация, client communication)

**Key Practices:**
- Regular client demos для валидации направления
- Transparent progress updates
- Domain knowledge gathering от lending экспертов
- Sprint coordination и timeline planning

---

## 📈 Leadership & Team Management Insights

### Architectural Decisions

**Architecture First:**
- Начинали с продуманного system design
- Database schema, API structure, integration patterns upfront
- Результат: Zero migrations во время development

**Domain-Driven Development:**
- Deep immersion в lending business
- Валидация с client domain experts
- Результат: Loan calculation engine прошёл audit без изменений

### Client Partnership

**Direct Communication:**
- Установление trust через transparent updates
- Regular demos для feedback
- Gathering critical domain knowledge
- Валидация technical decisions против business requirements

**Demo-Driven Progress:**
- Regular presentations стейкхолдерам
- Validation направления
- Early issue detection
- Building что действительно нужно клиенту

### Full-Cycle Ownership

**End-to-End Responsibility:**
- От architecture design через delivery
- Technology choices
- Team coordination
- Quality assurance
- Результат: Quick decision-making, consistent technical direction

---

## 📊 Metrics & Impact

### Business Metrics

**Delivery:**
- ✅ 6 месяцев - полная платформа в плановый timeline
- ✅ Платформа стала ключевым инструментом для risk assessment и credit decisions

**Decision Time:**
- ✅ Часы вместо дней на принятие кредитных решений
- ✅ Reducing credit decision time from days to hours

**Automation:**
- ✅ 80% ручного сбора данных устранено
- ✅ Manual data gathering workload eliminated

**CRM System:**
- ✅ Zoho - центральная система для учёта и отчётности
- ✅ Tracking + reporting через единую платформу

**Team:**
- ✅ 5 человек через полный цикл разработки
- ✅ Cross-functional team coordination

### Technical Metrics
- **External APIs:** 3 major integrations (Experian, HelloSign, Plaid)
- **Duration:** 6 months full-cycle development
- **Team Size:** 5 people managed
- **Approach:** Full-cycle ownership from architecture to delivery

---

## 🎯 Key Takeaways

### Technical
1. **Architecture First** критично - zero migrations во время development
2. **Domain expertise** essential для lending logic validation
3. **Multi-API resilience** через abstraction layers и fallbacks
4. **Queue-based sync** для multi-platform consistency

### Leadership
1. **Client partnership** через direct communication и trust building
2. **Demo-driven validation** catching issues early
3. **Full-cycle ownership** enabling quick decisions
4. **Domain immersion** preventing costly rework

### Process
1. **Architecture before implementation** saves rework
2. **Regular demos** validate direction
3. **Domain expert collaboration** ensures business logic correctness
4. **End-to-end responsibility** maintains technical consistency

---

## 🎯 Marketing Narrative

**Не просто:**
"Built lending platform for SME"

**А:**
"Led 5-person team through full-cycle development of SME lending platform with complex business logic, integrating 3 major external APIs (Experian, HelloSign, Plaid), designing loan calculation engine and risk assessment system from scratch, reducing credit decision time from days to hours while maintaining direct client communication and deep domain immersion in lending business."

**Demonstrates:**
- Full-cycle technical leadership
- Complex domain mastery (lending/finance)
- Multi-API integration expertise
- Architecture-first thinking
- Client partnership and domain learning
- Business impact focus (decision time reduction)

---

*Документ создан на основе project requirements и development timeline*

---
---

# InVitro Medical Platform - Полное Описание Проекта

> **Мастер-документ:** Вся информация о проекте собранная из Q&A с клиентом, sprint reviews, и технической документации

---

## 📋 Общая Информация

**Клиент:** InVitro Moldova
**Период разработки:** 12 месяцев (24+ двухнедельных спринта)
**Роль:** Team Lead & Technical Architect
**Размер команды:** 5-7 человек (backend, frontend, QA, designer)
**Статус:** Платформа поставлена, ongoing enhancements

### Бизнес-контекст
- **Сеть:** 40+ медицинских клиник по всей Молдове
- **Услуги:** 2,000+ видов медицинских анализов
- **Специализации:** 20+ медицинских направлений
- **Проблема:** Все записи пациентов шли через единый call-центр → узкое место
- **Решение:** Платформа самообслуживания 24/7 для пациентов

---

## 🛠️ Технический Стек

### Backend
- **Framework:** Laravel (PHP)
- **UI:** Livewire (вместо React/Vue - pragmatic choice для ускорения разработки на 40%)
- **Queue:** Redis (асинхронная обработка синхронизации)
- **Search:** TNTSearch (full-text поиск по 2000+ анализам, <500ms)

### Frontend
- **HTML/SCSS**
- **Livewire** для интерактивности

### Infrastructure
- **Git** для версионирования
- **Docker** (переход в процессе разработки)

### External Integration
- **Legacy CRM:** DocDream API
- **Payment:** MICB, PayNet (для пополнения счета)
- **SMS:** Нотификации (реализация на стороне DocDream или как доп.задача)

---

## 🏗️ Архитектура Системы

### Ключевые компоненты

1. **Patient Platform (новая)**
   - Laravel + Livewire
   - Redis для queue
   - TNTSearch для поиска
   - Family account management
   - Appointment booking
   - Test result viewing

2. **Legacy CRM (DocDream)**
   - 40+ филиалов
   - Тысячи дублированных записей пациентов
   - Несогласованные структуры данных
   - Incomplete/evolving API

3. **Deduplication Engine**
   - Master-slave архитектура
   - Scoring algorithm: recency, richness, matching
   - National ID (IDNP) validation layer
   - Admin dashboard для conflict resolution

4. **Synchronization Layer**
   - Queue-based асинхронная обработка
   - Polling architecture (компенсация отсутствия webhooks)
   - AllowWebAccess metadata flag для cross-system tracking
   - Zero-downtime sync для 40+ филиалов

---

## 📡 API Integration (10+ Resource Types)

### Patient Management Resources

**Persons**
- Все пользователи системы (пациенты, доктора)
- IDNP (national ID) как обязательное поле с уникальностью
- Адреса, контакты, документы

**PersonRelations**
- Семейные связи между пациентами
- Типы: Adult, Child, и другие DocDream relations
- Модерация всех изменений через admin panel
- Privacy controls (18+ не видят родители)

**Practitioners**
- Внешние доктора (добавляются через admin panel сайта)
- Связь с Persons resource

**Employees**
- Внутренние доктора InVitro
- Specialities (одна основная, может быть несколько)
- Abilities (услуги которые может оказывать)
- График работы по филиалам

### Service Delivery Resources

**Units**
- 40+ филиалов InVitro
- Адреса (координаты для Google Maps)
- График работы
- Доктора работающие в филиале

**Routines**
- 2,000+ медицинских анализов/услуг
- Типы:
  - `Lab` (лабораторные анализы)
  - `Regular` (регулярные услуги, подтипы: Intake, Consultation)
  - `Package` (пакеты услуг со скидкой)
- Переводы (en, ro, ru) - формат: `{"en": "title", "ro": "title", "ru": "title"}`
- Code (идентификатор анализа)
- Pricing с возможными скидками (только для анализов)
- Смежные услуги (например, "взятие крови" для анализов крови)

**RoutineGroups**
- Категории анализов с иерархией 4-5 уровней
- Пример: "Анализы" → "Диагностика инфекций" → подкатегории

**Specialities**
- Медицинские специализации
- Связаны с докторами (Employees)
- НЕ имеют прямой связи с услугами (услуги через abilities докторов)

**Appointments**
- Записи пациентов на услуги
- startDate, endDate
- Статусы: pending, confirmed, cancelled и др.
- Связь с Person, Employee, Unit, Services
- SMS нотификации (на стороне DocDream)
- `reserveExpiration` для временных записей

**Services**
- Service = routine converted to order detail
- Создаётся при создании Appointment
- Связь с Appointment и Order
- Результаты анализов (Documents) - 1 документ на Appointment

**Orders**
- Заказы после оплаты
- Группировка по unit и дате
- 1 посещение = 1 заказ
- Виртуальный unitID для online заказов
- Splitting: scheduled services → Appointments, non-scheduled → Order

**Planning**
- Проверка доступности слотов для записи
- `/api/planning` - check availability
- `/api/appointment` - create booking
- Временные записи со статусом `temp` в корзине

**Documents**
- Результаты анализов
- 1 документ на Appointment (НЕ на каждый service)
- Только на одном языке
- Скачивание результатов в кабинете

---

## 🔥 Ключевые Technical Challenges

### 1. National ID Deduplication (IDNP)

**Проблема:**
- Legacy CRM не проверял IDNP на уникальность
- Тысячи дублированных записей пациентов
- Конфликтующие данные между дубликатами
- 40% записей были дубликатами

**Решение:**
- IDNP как обязательное поле с validation
- Master-slave архитектура записей
- Scoring algorithm:
  - **Recency:** более свежие записи приоритетнее
  - **Richness:** более полные данные приоритетнее
  - **Matching:** степень совпадения данных
- Admin dashboard для ручного разрешения конфликтов
- Conflict resolution logic для тысяч существующих дубликатов

**Impact:** Core challenge проекта - resolved тысячи patient duplicates

### 2. No Webhooks from Legacy API

**Constraint:**
- DocDream API не предоставляет webhooks для data changes
- Вопрос: "Что если удалится person, а у него есть акк?"
- Ответ: "вебхуков не будет"

**Решение:**
- **Polling-based sync architecture**
- **AllowWebAccess metadata flag:**
  - Флаг показывающий что user существует в обоих системах
  - Предотвращает accidental deletions
  - Защита cross-system data integrity
- **Queue-based async processing**
- **Graceful fallbacks** для delays

**Impact:** Architectural constraint that shaped entire synchronization strategy

### 3. Evolving API with Incomplete Documentation

**Context:**
- **Sprint 1:** "Docdream API не закончен. Не описаны все ресурсы"
- **Sprint 3:** "API очень сырая, не указаны все статусы"
- Один ресурс может иметь поле, может не иметь, или быть пустым
- Статусы не всегда указаны полностью
- Некоторые endpoints возвращают пустой массив, другие 404

**Решение:**
- **Abstraction layers** изолирующие API changes
- **Flexible data models** handling optional fields
- **Graceful fallbacks** для incomplete responses
- **3-week re-architecture** sync layer когда CRM API изменился

**Impact:** Maintained development velocity despite API instability

### 4. Medical Data Privacy Compliance (18+)

**Проблема:**
- Родители не должны видеть медицинские результаты детей после 18 лет
- Family accounts с shared access
- Compliance требования

**Решение:**
- Privacy controls for family members
- Age-based access restrictions
- Настройка видимости результатов

**Impact:** Medical data compliance and patient privacy

### 5. Appointment → Service → Order Flow

**Complexity:**
- **Service** = routine converted to order detail when appointment created
- **Appointments** can have:
  - Type 1: Regular services (scheduled) - требуют планирования
  - Type 2: Lab tests (могут быть без планирования)
- **Order splitting:**
  - Scheduled services → Appointments
  - Non-scheduled → Order
- **Группировка:** 1 посещение == 1 заказ (по unit и дате)
- **Смежные услуги:** Автоматическое добавление (например, "взятие крови")
  - Если услуги в 1 день → объединяем смежные
  - Если разные дни → отдельные смежные услуги
- **Temporary bookings:** Planning создаётся в корзине со статусом `temp`
  - Если оплата не прошла → удаляем temp bookings

**Impact:** Complex business logic requiring careful state management

### 6. Data Moderation Layer

**Requirement:**
- Все изменения членов семьи проходят модерацию
- Информацию о члене семьи **нельзя обновлять** пользователю
- Только создание через модерацию

**Reason:**
- Medical data integrity
- Предотвращение создания дубликатов
- Ручной review чувствительных изменений

**Implementation:**
- Admin moderation queue
- Проверка IDNP при создании
- Reject/Approve workflow (детали не указаны в docs)

**Impact:** Compliance with healthcare data regulations

### 7. Complex Cart & Checkout Logic

**Challenges:**
- **Planning race condition:**
  - Пока клиент создаёт корзину и выбирает время
  - Другой клиент может занять тот же слот
  - Решение: создавать temp appointments в корзине, при конфликте - ошибка + возможность изменить

- **Package recommendations:**
  - Когда показывать пакет? Если в корзине N% услуг из пакета
  - Процент настраивается в Admin panel (default: 50%)

- **Gender filtering:**
  - Некоторые анализы только для определённого пола
  - Фильтрация после выбора члена семьи
  - Скрывать или показывать как disabled? (не указано в docs)

- **Смежные услуги в пакетах:**
  - При разделении планирования → увеличивается кол-во смежных услуг
  - Увеличение цены пакета → не правильно
  - Решение: не давать разделять анализы со смежными услугами

---

## 📊 Процессы и Методология

### Sprint Organization

**Duration:** 24+ двухнедельных спринта

**Workflow:**
1. Sprint planning
2. Development
3. Weekly retrospectives
4. Sprint review с клиентом (после установления доверия)
5. Flexible prioritization responding to evolving requirements

**Key Practices:**
- 2 чекпоинта в процессе спринта (каждый четверг)
- Проход по проекту, что не хватает, что переделать
- Обсуждения тасков ТОЛЬКО в Jira (для knowledge retention)
- Коммиты называем как таски
- Таски на ревью только когда всё сделано + merge на dev

### Team Coordination

**Roles:**
- Backend developers
- Frontend developers
- QA team
- Designer
- Team Lead (архитектурные решения, координация)

**Challenges faced:**
- Джуны на сложном проекте
- Координация фронт/бэк
- Зависимые таски между разработчиками
- External dependencies (DocDream API team bandwidth)

**Solutions:**
- Weekly "medical workflow deep-dives" с QA для domain knowledge
- Transparent communication о блокерах
- Adaptive planning при external blockers
- Frontend reprioritization когда backend blocked

---

## 🎯 Business Logic & Rules

### Registration & Authentication
- Авторизация через телефон или email (НЕ через login)
- Поле `login` убрано как ненужное
- SMS подтверждение (аккаунт для SMS дали поздно)

### Family Accounts
- Главный пользователь должен иметь IDNP
- Член семьи тоже должен иметь IDNP
- Создание члена семьи → модерация
- Поиск по существующим persons перед созданием (avoid duplicates)
- Удаление члена семьи → только удаление relation (НЕ самого person)
- Adult relationships, Child relationships, и другие DocDream types

### Services & Pricing
- **ModelPricing:** Скидки работают только для анализов
- **Пакеты:** набор анализов по скидке, работают как обычный заказ
- **Промокодов нету**
- **Валюта:** Всё в одной валюте
- **Повтор посещения:** Добавление в корзину + redirect на заказ

### Booking Rules
- **Филиал selection:** Некоторые анализы делаются только в определённых филиалах
- **Консультация:** Когда выбрана → система выбирает где можно пройти
- **Автоматическое добавление:** Смежные услуги (взятие крови, etc)
- **Planning:** Check availability → Create appointment with interval
- **No duplicate removal:** После создания appointment нельзя удалять вручную, только статус update

### Payment & Wallet
- **Пополнение:** MICB, PayNet
- **Карточки:** НЕ сохраняются в системе
- **Баланс:** Endpoint для получения есть
- **Оплата:** На стороне веб-сайта → после успеха → создание order в DocDream

### Doctor Cabinet (Practitioner)
- **Мои пациенты:** Доктор видет только своих пациентов
- **Добавление пациента:** Сохраняем и добавляем статус "потенциальный клиент"
- **Детальная страница пациента:** ФИО, IDNP, номер телефона
- **Посещения:** Доктор видит только те посещения, которые сам назначал
- **Статистика:** По доктору и по пациенту (endpoint ожидается)
- **Заметки:** Кто может видеть/изменять - не ясно из docs

---

## 🔄 Synchronization Strategy

### Core Principles
1. **Master-slave architecture** для деduplication
2. **Queue-based processing** для async sync
3. **Polling** вместо webhooks
4. **AllowWebAccess flag** для cross-system safety
5. **Zero-downtime** для 40+ филиалов

### Sync Resources
- **From DocDream to Website:**
  - Units (branches) - manual address creation на сайте
  - Employees (doctors)
  - Routines (services/tests)
  - RoutineGroups (categories)
  - Specialities
  - Documents (test results)
  - Appointments (bookings)
  - Orders (after payment)

- **From Website to DocDream:**
  - Persons (new patient registrations)
  - PersonRelations (family members после модерации)
  - Practitioners (external doctors)
  - Appointments (bookings)
  - Orders (after payment)

### Sync Challenges
- **Deleted resources:** Нет webhooks → polling для detect changes
- **Routines visibility:** Не все отображаются на `/routine`, но есть на детальной
- **Удалённые рутины:** Существуют в API, но не в списке (пример: routine 842)
- **Missing translations:** Переводы для услуг существуют, но не заполнены в БД

---

## 📈 Leadership & Team Management Insights

### Architectural Decisions

**Laravel + Livewire vs React/Vue:**
- Выбор: Laravel + Livewire
- Обоснование: 40% faster development, easier handoff для Moldova team
- Team preference: React/Vue (modern frameworks)
- Приоритет: Outcome over popularity

**TNTSearch vs Algolia/ElasticSearch:**
- Выбор: TNTSearch
- Обоснование: достаточно для 2000+ tests, <500ms search
- Benefit: No external dependency, simpler maintenance

**Polling vs Webhooks:**
- Constraint: No webhooks available
- Solution: Turned limitation into strength
- Benefits: More robust data integrity with moderation queue + metadata flags

### Risk Management

**Early identification:**
- Legacy API team bandwidth = bottleneck
- Documented dependencies
- Escalated to stakeholders with lead-time projections

**Adaptive planning:**
- 3-week re-architecture of sync layer → reprioritized frontend features
- Maintained team productivity during blockers
- Transparent retrospectives documenting lessons

**Abstraction layers:**
- Always build around external dependencies
- Lesson learned from API changes
- Applied to future projects

### Team Context Building

**QA Domain Knowledge:**
- Weekly "medical workflow deep-dives"
- Result: QA caught edge cases (family members sharing phones → duplicate scenarios)
- Prevented production bugs

**Transparent Communication:**
- Blocker escalation with projections
- Regular sprint reviews (after trust established)
- Jira as single source of truth for discussions

---

## 🚫 What NOT to Do (Lessons from Sprint Reviews)

### Development Process
- ❌ Не начинать разработку пока API не закончен
- ❌ Не ставить задачи на ревью пока всё не сделано
- ❌ Не делать таски в новой ветке без merge на dev
- ❌ Не создавать self-assigned tasks без proper description

### Code Quality
- ❌ Копирование JS с страницы на страницу
- ❌ Неправильный подбор HTML tags (divs вместо links)
- ❌ Незакрытые HTML блоки
- ❌ Наименования: object1, object2
- ❌ Верстка "как картинка" без думанья о backend integration

### Planning & Estimation
- ❌ Неправильные estimates для больших модулей без ТЗ
- ❌ Распланировать все спринты сразу (не получится)
- ❌ Большие модули без ТЗ (корзина, планирование, заказ)

---

## 📊 Metrics & Impact

### Business Metrics (Achieved)
- **Call Center Load:** 60-70% projected reduction
- **Patient Time:** 15-20 min saved per booking
- **Scalability:** 10x volume growth capability
- **Duplicate Records:** 1000s resolved
- **Branch Continuity:** 100% zero downtime
- **Search Performance:** <500ms full-text search

### Technical Metrics
- **API Resources:** 10+ types integrated
- **Medical Tests:** 2,000+ searchable
- **Clinic Branches:** 40+ synchronized
- **Sprint Cycles:** 24+ two-week sprints
- **Team Size:** 5-7 people managed

### Delivery Timeline
- **Duration:** 12 months
- **Status:** Core platform delivered
- **Approach:** Agile with adaptive planning
- **External Blockers:** Legacy API team bandwidth

---

## 🔮 Future Considerations & Open Questions

### Unresolved from Docs
1. Нотификации: кто отвечает (DocDream или наш сайт)?
2. Статистика докторов: когда будет API?
3. SMS нотификации: per appointment или global?
4. Семья 18+ privacy: финальное решение?
5. Отклонённый член семьи: нотификации? причина? повторные попытки?
6. Referrer resource: когда будет создание?
7. Релевантные услуги (recommendations): маркетинговая аналитика?

### Technical Debt (из sprint reviews)
- Переход на Docker (в процессе)
- Сиды для settings (объёмная задача)
- Валидация HTML (прогон через validator)
- Единые стили для states (disabled buttons, etc)
- Общие классы валидации

---

## 📚 Key Takeaways

### Technical
1. **Abstraction layers** критичны при работе с external dependencies
2. **Flexible data models** необходимы для evolving APIs
3. **Pragmatic tech choices** > popular frameworks (outcome over hype)
4. **Polling + metadata flags** могут быть надёжнее webhooks
5. **Queue-based async** essential для zero-downtime sync

### Leadership
1. **Early risk identification** + stakeholder communication
2. **Transparent retrospectives** документируют уроки
3. **Team context building** (QA domain knowledge)
4. **Adaptive planning** при external blockers
5. **Outcome over popularity** в технических решениях

### Process
1. **Jira as single source** для discussions
2. **Weekly checkpoints** для course correction
3. **Definition of Done** перед ревью
4. **Domain expertise** building для QA
5. **Trust establishment** перед client reviews

---

## 🎯 Marketing Narrative

**Не просто:**
"Built medical platform for 40 clinics"

**А:**
"Led cross-functional team through 12-month development integrating 10+ legacy API resources with incomplete documentation, resolving thousands of patient duplicates through master-slave deduplication architecture, while maintaining sprint velocity despite external blockers and evolving requirements."

**Demonstrates:**
- Technical maturity
- Adaptive leadership
- Architectural thinking
- Pragmatic decision-making
- Real-world constraint navigation

---

*Документ создан на основе:*
- Q&A с клиентом InVitro
- Sprint Reviews 1-7
- Техническая документация DocDream API
- Внутренние процессы команды

*Последнее обновление: На основе всех предоставленных материалов*
