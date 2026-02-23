# Инструкция по интеграции TechnicalSolution компонента

## 📍 Где добавить компонент

Файл: `/src/app/[locale]/projects/[slug]/ProjectDetail.tsx`

## 🔧 Шаги интеграции:

### 1. Импортировать компонент

Добавьте импорт в начало файла `ProjectDetail.tsx`:

```typescript
import { TechnicalSolution } from '@/components/TechnicalSolution';
```

### 2. Добавить секцию после Overview

Вставьте компонент **после блока "Overview"** и **перед блоком "Challenges"** (примерно после строки 97):

```tsx
{/* Overview */}
<div>
  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
    <span className="w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
    {t('overview')}
  </h2>
  <p className="text-muted leading-relaxed text-lg">
    {project.fullDescription[locale]}
  </p>
</div>

{/* ===== ДОБАВИТЬ ЗДЕСЬ ===== */}
{project.technicalSolution && (
  <div>
    <TechnicalSolution
      title={project.technicalSolution[locale].title}
      description={project.technicalSolution[locale].description}
      diagrams={project.technicalSolution[locale].diagrams}
    />
  </div>
)}
{/* ===== КОНЕЦ ===== */}

{/* Challenges & Decisions - mini block */}
<div className="glass rounded-2xl p-6 border border-gold-400/10">
  ...
</div>
```

### 3. Добавить секцию Impact (если нужно)

Если хотите показать секцию Impact/Results, добавьте её после Features (примерно после строки 167):

```tsx
{/* Features */}
<div>
  ...
</div>

{/* ===== ДОБАВИТЬ IMPACT ===== */}
{project.impact && (
  <div>
    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
      <span className="w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
      Impact & Results
    </h2>

    {/* Metrics */}
    {project.impact[locale].metrics.length > 0 && (
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gold-400">
          Key Metrics
        </h3>
        <ul className="space-y-4">
          {project.impact[locale].metrics.map((metric, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              <span className="text-foreground/80">{metric}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    )}

    {/* Qualitative */}
    {project.impact[locale].qualitative.length > 0 && (
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gold-400">
          Qualitative Impact
        </h3>
        <ul className="space-y-4">
          {project.impact[locale].qualitative.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-blue-400" />
              </div>
              <span className="text-foreground/80">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    )}
  </div>
)}
{/* ===== КОНЕЦ IMPACT ===== */}
```

### 4. Добавить Client Context Badge (опционально)

Если хотите показать контекст клиента как badge, добавьте после Year badge (примерно строка 42):

```tsx
<div className="flex items-center gap-4 mb-4">
  <span className="px-3 py-1 glass rounded-full text-xs font-medium text-gold-400 border border-gold-400/20">
    {project.year}
  </span>

  {/* ===== ДОБАВИТЬ CLIENT CONTEXT ===== */}
  {project.clientContext && (
    <span className="px-3 py-1 glass rounded-full text-xs font-medium text-blue-400 border border-blue-400/20">
      {project.clientContext[locale].split('·')[0].trim()}
    </span>
  )}
  {/* ===== КОНЕЦ ===== */}
</div>
```

---

## 📋 Полный пример финальной структуры страницы:

```
1. Header (title, year, badges)
2. Hero Image
3. Overview (fullDescription)
4. 💡 Technical Solution (НОВОЕ - с диаграммами в табах)
5. Challenges (existing)
6. Scope (existing)
7. Features (existing)
8. Impact & Results (НОВОЕ - metrics + qualitative)
9. Sidebar (technologies, links)
```

---

## 🎨 Стилизация (уже готова)

Компонент `TechnicalSolution` использует Tailwind CSS и автоматически адаптируется к вашему дизайну с:
- Dark mode support
- Responsive design (табы становятся вертикальными на мобильных)
- Анимации при переключении табов
- Hover эффекты

---

## ✅ Проверка после интеграции:

1. **Запустите dev server:**
   ```bash
   npm run dev
   ```

2. **Перейдите на страницу проекта:**
   ```
   http://localhost:3000/projects/invitro-medical-platform
   ```

3. **Проверьте:**
   - [ ] Секция Technical Solution отображается после Overview
   - [ ] Табы переключаются корректно
   - [ ] Диаграммы загружаются (или показываются placeholder если файлов еще нет)
   - [ ] Описания под диаграммами отображаются
   - [ ] Responsive на мобильных (табы вертикально)
   - [ ] Dark mode работает корректно

---

## 🐛 Troubleshooting:

### Ошибка: "Cannot find module '@/components/TechnicalSolution'"
**Решение:** Убедитесь, что файл создан по пути `/src/components/TechnicalSolution.tsx`

### Ошибка: Image failed to load
**Решение:**
1. Создайте папку `/public/images/projects/invitro/`
2. Добавьте временные placeholder изображения или используйте `next/image` с `unoptimized`
3. Или временно закомментируйте проект Invitro из массива `projects` пока не создадите диаграммы

### Диаграммы не отображаются
**Решение:**
1. Проверьте пути к изображениям в `projects.ts`
2. Убедитесь, что файлы PNG существуют в `/public/images/projects/invitro/`
3. Проверьте имена файлов (они case-sensitive)

---

## 🚀 Следующие шаги:

1. ✅ Создайте диаграммы используя `DIAGRAM_GUIDE.md`
2. ✅ Поместите PNG файлы в `/public/images/projects/invitro/`
3. ✅ Интегрируйте компонент в `ProjectDetail.tsx`
4. ✅ Протестируйте на локальном сервере
5. ✅ Commit & Push изменения

---

## 💡 Дополнительно:

Этот паттерн можно переиспользовать для других проектов! Просто добавьте поля `technicalSolution`, `clientContext`, и `impact` в любой проект в `projects.ts`, и компонент автоматически отобразится.
