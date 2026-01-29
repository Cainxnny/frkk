import React, { useState } from 'react';

function WidgetArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" style={{ flexShrink: 0 }}>
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const CALLS_TABS = ['Корзина', 'Повторные', 'Маркетинговые кампании'];
const CALLS_ROWS = [
  { company: 'ГАММА-ПЛАСТ', inn: '123456789111', source: 'MK', sourceBg: '#E5F0FF', sourceColor: '#1D4ED8', gk: 'Да (4)', gkYes: true, status: 'Клиент', date: '17.10', time: '09:15', industry: 'Рыболовство и охота' },
  { company: 'АБ "Сычёвы и адвокаты"', inn: '123456789111', source: 'Лид', sourceBg: '#E5F5EC', sourceColor: '#0F766E', gk: 'Нет', gkYes: false, status: 'Проспект', date: '18.10', time: '09:40', industry: 'Негосударственный фонд' },
  { company: 'АНО "Авто и Мото"', inn: '123456789111', source: 'CA', sourceBg: '#FEF5D7', sourceColor: '#B45309', gk: 'Да (2)', gkYes: true, status: 'Клиент', date: '19.10', time: '10:10', industry: 'Авиастроение' },
  { company: 'АО «КИТ»', inn: '123456789111', source: 'MK', sourceBg: '#E5F0FF', sourceColor: '#1D4ED8', gk: 'Да (8)', gkYes: true, status: 'Проспект', date: '17.10', time: '10:30', industry: 'ВИНК' },
  { company: 'АНО Карп', inn: '123456789111', source: 'Лид', sourceBg: '#E5F5EC', sourceColor: '#0F766E', gk: 'Нет', gkYes: false, status: 'Клиент', date: '18.10', time: '10:40', industry: 'Сельское хозяйство' },
  { company: 'ООО "Северный ветер"', inn: '123456789112', source: 'MK', sourceBg: '#E5F0FF', sourceColor: '#1D4ED8', gk: 'Да (3)', gkYes: true, status: 'Клиент', date: '20.10', time: '11:00', industry: 'Торговля' },
  { company: 'ИП Козлов М.А.', inn: '123456789113', source: 'Лид', sourceBg: '#E5F5EC', sourceColor: '#0F766E', gk: 'Нет', gkYes: false, status: 'Проспект', date: '19.10', time: '11:25', industry: 'Услуги' },
  { company: 'ПАО "Ромашка"', inn: '123456789114', source: 'CA', sourceBg: '#FEF5D7', sourceColor: '#B45309', gk: 'Да (5)', gkYes: true, status: 'Клиент', date: '18.10', time: '11:50', industry: 'Производство' },
  { company: 'АО "Вектор-Сервис"', inn: '123456789115', source: 'MK', sourceBg: '#E5F0FF', sourceColor: '#1D4ED8', gk: 'Нет', gkYes: false, status: 'Проспект', date: '20.10', time: '12:15', industry: 'Логистика' },
  { company: 'ООО "СтройИнвест"', inn: '123456789116', source: 'Лид', sourceBg: '#E5F5EC', sourceColor: '#0F766E', gk: 'Да (6)', gkYes: true, status: 'Клиент', date: '17.10', time: '12:40', industry: 'Строительство' },
  { company: 'ИП Савеловский', inn: '123456789117', source: 'CA', sourceBg: '#FEF5D7', sourceColor: '#B45309', gk: 'Нет', gkYes: false, status: 'Проспект', date: '19.10', time: '13:05', industry: 'Консалтинг' },
  { company: 'АО "Технопром"', inn: '123456789118', source: 'MK', sourceBg: '#E5F0FF', sourceColor: '#1D4ED8', gk: 'Да (1)', gkYes: true, status: 'Клиент', date: '18.10', time: '13:30', industry: 'IT' },
  { company: 'ООО "Агро-Плюс"', inn: '123456789119', source: 'Лид', sourceBg: '#E5F5EC', sourceColor: '#0F766E', gk: 'Да (7)', gkYes: true, status: 'Проспект', date: '20.10', time: '14:00', industry: 'Сельское хозяйство' },
  { company: 'ПАО "Финанс-Центр"', inn: '123456789120', source: 'CA', sourceBg: '#FEF5D7', sourceColor: '#B45309', gk: 'Нет', gkYes: false, status: 'Клиент', date: '17.10', time: '14:25', industry: 'Финансы' },
  { company: 'АНО "Здоровье"', inn: '123456789121', source: 'MK', sourceBg: '#E5F0FF', sourceColor: '#1D4ED8', gk: 'Да (2)', gkYes: true, status: 'Проспект', date: '19.10', time: '14:50', industry: 'Медицина' },
];

/**
 * Главная страница — по разделу: План на сегодня (план + виджеты) или Звонки (табы, статистика, таблица).
 */
export default function HomePage({ homeSection = 'plan' }) {
  const [callsTab, setCallsTab] = useState(0);
  const [selectedRows, setSelectedRows] = useState(() => CALLS_ROWS.map(() => true));
  const planItems = [
    { time: '09:00', entries: [
      { text: 'Назначить встречу с ИП Савеловский', icon: 'clipboard', stripe: '#6B7280' },
      { text: 'Встреча с клиентом', icon: 'meeting', stripe: '#F59E0B' },
    ]},
    { time: '10:00', entries: [
      { text: 'Назначить встречу с ИП Савеловский', icon: 'clipboard', stripe: '#6B7280' },
      { text: 'Планерка переговорная 420', icon: 'meeting', stripe: '#EF4444', hasAttachment: true },
    ]},
    { time: '11:00', entries: [
      { text: 'Созвон по проекту РКО', icon: 'clipboard', stripe: '#6B7280' },
      { text: 'Подготовить отчёт за неделю', icon: 'meeting', stripe: '#3B82F6' },
    ]},
    { time: '12:00', entries: [
      { text: 'Назначить встречу с ИП Савеловский', icon: 'clipboard', stripe: '#6B7280' },
      { text: 'Встретиться с клиентом ООО "Ромашка"', icon: 'meeting', stripe: '#10B981' },
    ]},
    { time: '13:00', entries: [
      { text: 'Проверить входящие заявки', icon: 'clipboard', stripe: '#6B7280' },
      { text: 'Консультация по тарифам для ИП Козлов', icon: 'meeting', stripe: '#F59E0B' },
    ]},
    { time: '14:00', entries: [
      { text: 'Демо продукта для ООО "Вектор"', icon: 'meeting', stripe: '#10B981' },
      { text: 'Звонок в колл-центр по эскалации', icon: 'clipboard', stripe: '#6B7280' },
    ]},
    { time: '15:00', entries: [
      { text: 'Согласование договора с ИП Петров', icon: 'meeting', stripe: '#EF4444', hasAttachment: true },
      { text: 'Обновить базу лидов', icon: 'clipboard', stripe: '#6B7280' },
    ]},
    { time: '16:00', entries: [
      { text: 'Отправить КП по РКО в ООО "Север"', icon: 'clipboard', stripe: '#3B82F6' },
    ]},
    { time: '17:00', entries: [
      { text: 'Ревью задач на завтра с командой', icon: 'meeting', stripe: '#F59E0B' },
      { text: 'Проверить статус заявок в CRM', icon: 'clipboard', stripe: '#6B7280' },
    ]},
    { time: '18:00', entries: [
      { text: 'Созвон с менеджером по лидам', icon: 'meeting', stripe: '#10B981' },
    ]},
    { time: '19:00', entries: [
      { text: 'Подготовить презентацию для завтрашней встречи', icon: 'clipboard', stripe: '#6B7280' },
    ]},
  ];

  const widgets = [
    {
      title: 'Звонки',
      left: { value: '24', label: 'Повторных' },
      right: { value: '3', label: 'Из них просрочено', valueColor: '#EF4444' },
    },
    {
      title: 'Лиды РКО',
      left: { value: '5', label: 'Сбор документов' },
      right: { value: '7', label: 'Переданы на открытие р/с' },
    },
    {
      title: 'Охват ГК по счетам (Мои клиенты)',
      left: { value: '98%', label: 'Доля Банка в ГК по открытым счетам' },
      right: { value: '10 шт.', label: 'Потенциал по открытию счетов' },
    },
  ];

  if (homeSection === 'calls') {
    const allSelected = selectedRows.every(Boolean);
    const totalSelected = selectedRows.filter(Boolean).length;
    const remainingSelected = CALLS_ROWS.filter((row, idx) => selectedRows[idx] && row.status === 'Проспект').length;
    const processedSelected = CALLS_ROWS.filter((row, idx) => selectedRows[idx] && row.status === 'Клиент').length;
    const callsStats = [
      { label: 'Всего:', value: `${totalSelected} контакт (ов)` },
      { label: 'Осталось обработать:', value: `${remainingSelected} контакт (ов)` },
      { label: 'Обработано:', value: `${processedSelected} контакт (ов)` },
    ];

    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, padding: '24px 24px 16px', background: '#FFFFFF', fontFamily: "'VTBGroupUI', -apple-system, BlinkMacSystemFont, sans-serif" }}>
          <h1 style={{ flexShrink: 0, fontSize: '24px', fontWeight: '600', lineHeight: '32px', marginBottom: '24px', color: '#111827' }}>Звонки</h1>
          <div style={{ flexShrink: 0, borderBottom: '1px solid #D5D8DE', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: 0 }}>
              {CALLS_TABS.map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setCallsTab(idx)}
                  style={{
                    padding: '12px 16px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: callsTab === idx ? '#2563EB' : '#4F525A',
                    borderBottom: callsTab === idx ? '2px solid #2563EB' : '2px solid transparent',
                    marginBottom: '-1px',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div style={{ flexShrink: 0, marginBottom: '16px', border: '1px solid #2563EB', borderRadius: '8px', background: '#F8FAFC', padding: '16px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {callsStats.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '14px', color: '#4F525A' }}>{s.label}</span>
                <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: '14px', fontWeight: '500', color: '#2563EB', textDecoration: 'none' }}>{s.value}</a>
              </div>
            ))}
          </div>
          <div className="ios-scroll" style={{ flex: 1, minHeight: 0, overflow: 'auto', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                  {['Наименование компании', 'ИНН', 'Источник', 'ГК', 'Статус', 'Дата', 'Время', 'Отрасль', ''].map((col) => (
                    <th
                      key={col}
                      style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        background: '#FFFFFF',
                        padding: '12px 16px',
                        textAlign: 'left',
                        fontWeight: '500',
                        color: '#2B313B',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 1px 0 0 #E5E7EB',
                      }}
                    >
                      {col === 'Дата' ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          {col}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
                          <span style={{ color: '#9CA3AF', cursor: 'pointer' }} title="Инфо">ⓘ</span>
                        </span>
                      ) : col === 'Наименование компании' ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                          <input
                            type="checkbox"
                            checked={allSelected}
                            onChange={() => {
                              const next = CALLS_ROWS.map(() => !allSelected);
                              setSelectedRows(next);
                            }}
                            style={{ accentColor: '#2563EB' }}
                          />
                          {col}
                        </span>
                      ) : col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CALLS_ROWS.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: idx < CALLS_ROWS.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <input
                          type="checkbox"
                          checked={selectedRows[idx]}
                          onChange={() => {
                            const next = [...selectedRows];
                            next[idx] = !next[idx];
                            setSelectedRows(next);
                          }}
                          style={{ accentColor: '#2563EB' }}
                        />
                        {row.company}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#4F525A' }}>{row.inn}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', background: row.sourceBg, color: row.sourceColor }}>{row.source}</span>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      {row.gkYes ? (
                        <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', border: '1px solid #22C55E', background: '#E5F5EC', color: '#0F766E' }}>{row.gk}</span>
                      ) : (
                        <span style={{ color: '#4F525A' }}>{row.gk}</span>
                      )}
                    </td>
                    <td style={{ padding: '12px 16px', color: '#4F525A' }}>{row.status}</td>
                    <td style={{ padding: '12px 16px', color: '#4F525A' }}>{row.date}</td>
                    <td style={{ padding: '12px 16px', color: '#4F525A' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {row.time}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#4F525A' }}>{row.industry}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: '14px', color: '#2563EB', textDecoration: 'none' }}>Обработать</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
        padding: '24px 24px 16px',
        background: '#FFFFFF',
      }}>
        <h1 style={{
          flexShrink: 0,
          fontSize: '24px',
          fontWeight: '600',
          lineHeight: '32px',
          marginBottom: '24px',
          color: '#111827',
          fontFamily: "'VTBGroupUI', -apple-system, BlinkMacSystemFont, sans-serif",
        }}>Главная</h1>

        <div style={{ display: 'flex', gap: '24px', flex: 1, minHeight: 0 }}>
          {/* Левая колонка: План задач и встреч — как меню разделов: фиксированная высота за счёт flex, скролл ios-scroll */}
          <div style={{
            flex: '0 1 70%',
            minWidth: 0,
            minHeight: 0,
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #D5D8DE',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#FFFFFF',
          }}>
            <div style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 16px 12px',
              cursor: 'pointer',
              borderBottom: '1px solid #F3F4F6',
            }}>
              <span style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#111827',
                fontFamily: "'VTBGroupUI', -apple-system, BlinkMacSystemFont, sans-serif",
              }}>План задач и встреч</span>
              <WidgetArrow />
            </div>
            <div className="ios-scroll" style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '16px' }}>
              {planItems.map((slot, slotIdx) => (
                <div key={slotIdx} style={{ display: 'flex', marginBottom: '0' }}>
                  <div style={{
                    width: '56px',
                    flexShrink: 0,
                    fontSize: '14px',
                    color: '#6B7280',
                    fontFamily: "'VTBGroupUI', -apple-system, BlinkMacSystemFont, sans-serif",
                    paddingTop: slotIdx === 0 ? '0' : '16px',
                  }}>{slot.time}</div>
                  <div style={{ flex: 1, paddingLeft: '16px', borderLeft: '1px dashed #E5E7EB', marginLeft: '8px', paddingBottom: '16px' }}>
                    {slot.entries.map((entry, entryIdx) => (
                      <div
                        key={entryIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: 0,
                          paddingRight: '16px',
                          background: 'transparent',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          marginBottom: '4px',
                          fontFamily: "'VTBGroupUI', -apple-system, BlinkMacSystemFont, sans-serif",
                          fontSize: '14px',
                          color: '#111827',
                          minHeight: '40px',
                        }}
                      >
                        <div style={{
                          width: '4px',
                          height: '40px',
                          borderRadius: '2px',
                          background: entry.stripe || '#E5E7EB',
                          flexShrink: 0,
                        }} />
                        <span style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B7280' }}>
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10 9 9 9 8 9"/>
                          </svg>
                        </span>
                        <span style={{ flex: 1 }}>{entry.text}</span>
                        {entry.hasAttachment && (
                          <span style={{ color: '#6B7280' }}>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                            </svg>
                          </span>
                        )}
                        {entry.bg && !entry.hasAttachment && (
                          <span style={{ color: '#6B7280' }}>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="23 4 23 10 17 10"/>
                              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                            </svg>
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка: 3 виджета — 20% ширины, ховер и тень как у карточек витрины */}
          <div style={{
            flex: '0 1 30%',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            fontFamily: "'VTBGroupUI', -apple-system, BlinkMacSystemFont, sans-serif",
          }}>
            <style>{`
              .home-widget {
                transition: box-shadow 0.2s ease;
                cursor: pointer;
                box-shadow: 0 1px 2px rgba(0,0,0,0.04);
              }
              .home-widget:hover {
                box-shadow: 0 4px 16px rgba(0,0,0,0.08);
              }
            `}</style>
            {widgets.map((w, i) => (
              <div
                key={i}
                className="home-widget"
                style={{
                  border: '1px solid #D5D8DE',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  padding: '16px',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  cursor: 'pointer',
                }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>{w.title}</span>
                  <WidgetArrow />
                </div>
                <div style={{ display: 'flex', gap: '24px', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: '600', color: '#111827', lineHeight: 1.2 }}>{w.left.value}</div>
                    <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>{w.left.label}</div>
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: '600', color: w.right.valueColor || '#111827', lineHeight: 1.2 }}>{w.right.value}</div>
                    <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>{w.right.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
