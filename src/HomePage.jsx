import React from 'react';

function WidgetArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" style={{ flexShrink: 0 }}>
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/**
 * Главная страница — заголовок, слева блок "План задач и встреч" с бордером, справа 3 виджета.
 */
export default function HomePage() {
  const planItems = [
    { time: '09:00', entries: [
      { text: 'Назначить встречу с ИП Савеловский', icon: 'clipboard' },
      { text: 'Встреча с клиентом', icon: 'meeting', bg: '#FEF5D7' },
    ]},
    { time: '10:00', entries: [
      { text: 'Назначить встречу с ИП Савеловский', icon: 'clipboard' },
      { text: 'Планерка переговорная 420', icon: 'meeting', bg: '#FFE5E5', hasAttachment: true },
    ]},
    { time: '11:00', entries: [
      { text: 'Созвон по проекту РКО', icon: 'clipboard' },
      { text: 'Подготовить отчёт за неделю', icon: 'meeting', bg: '#E5F0FF' },
    ]},
    { time: '12:00', entries: [
      { text: 'Назначить встречу с ИП Савеловский', icon: 'clipboard' },
      { text: 'Встретиться с клиентом ООО "Ромашка"', icon: 'meeting', bg: '#E5F5EC' },
    ]},
    { time: '13:00', entries: [
      { text: 'Проверить входящие заявки', icon: 'clipboard' },
      { text: 'Консультация по тарифам для ИП Козлов', icon: 'meeting', bg: '#FEF5D7' },
    ]},
    { time: '14:00', entries: [
      { text: 'Демо продукта для ООО "Вектор"', icon: 'meeting', bg: '#E5F5EC' },
      { text: 'Звонок в колл-центр по эскалации', icon: 'clipboard' },
    ]},
    { time: '15:00', entries: [
      { text: 'Согласование договора с ИП Петров', icon: 'meeting', bg: '#FFE5E5', hasAttachment: true },
      { text: 'Обновить базу лидов', icon: 'clipboard' },
    ]},
    { time: '16:00', entries: [
      { text: 'Отправить КП по РКО в ООО "Север"', icon: 'clipboard', bg: '#E5F0FF' },
    ]},
    { time: '17:00', entries: [
      { text: 'Ревью задач на завтра с командой', icon: 'meeting', bg: '#FEF5D7' },
      { text: 'Проверить статус заявок в CRM', icon: 'clipboard' },
    ]},
    { time: '18:00', entries: [
      { text: 'Созвон с менеджером по лидам', icon: 'meeting', bg: '#E5F5EC' },
    ]},
    { time: '19:00', entries: [
      { text: 'Подготовить презентацию для завтрашней встречи', icon: 'clipboard', bg: '#F3F4F6' },
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
                          padding: '12px 16px',
                          background: entry.bg || '#FFFFFF',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          marginBottom: '8px',
                          fontFamily: "'VTBGroupUI', -apple-system, BlinkMacSystemFont, sans-serif",
                          fontSize: '14px',
                          color: '#111827',
                        }}
                      >
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
