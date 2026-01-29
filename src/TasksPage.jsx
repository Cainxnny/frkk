import React from 'react';

/**
 * Приложение «Задачи» — заголовок, фильтры, таблица задач.
 * Лэйаут как на Главной, без виджетов (контент на всю ширину).
 */
const STATUS_STYLES = {
  'Новая': { bg: '#E5F5EC', color: '#0F766E' },
  'В работе': { bg: '#E5F0FF', color: '#1D4ED8' },
  'На проверке': { bg: '#FEF5D7', color: '#B45309' },
  'Завершена': { bg: '#D1FAE5', color: '#047857' },
  'Отменена': { bg: '#FFE5E5', color: '#B91C1C' },
};

const TASKS = [
  { name: 'Подготовка отчёта за квартал', type: 'Подготовка отчета', status: 'Новая', stripe: '#E879F9', client: 'ООО «ОБЩЕСТВО ЮИКС ЮАЙ РЕШЕНИЙ»' },
  { name: 'Встреча с клиентом ООО "Север"', type: 'Встреча с клиентом', status: 'В работе', stripe: '#22C55E', client: 'ООО "Север"' },
  { name: 'Согласование договора РКО', type: 'Другое', status: 'На проверке', stripe: '#F59E0B', client: 'ИП Савеловский А.В.' },
  { name: 'Закрытие периода по счёту', type: 'Закрытие периода', status: 'Завершена', stripe: '#3B82F6', client: 'ООО «Промышленно-строительная компания Северо-Запад»' },
  { name: 'Верстка бюджета на следующий год', type: 'Верстка бюджета', status: 'Отменена', stripe: '#EF4444', client: 'ООО "Мурино"' },
  { name: 'Консультация по тарифам для ИП', type: 'Встреча с клиентом', status: 'Новая', stripe: '#8B5CF6', client: 'ИП Козлов М.И.' },
  { name: 'Проверить входящие заявки', type: 'Другое', status: 'В работе', stripe: '#06B6D4', client: 'ООО «Транспортно-логистический холдинг Центр»' },
  { name: 'Демо продукта для ООО "Вектор"', type: 'Встреча с клиентом', status: 'Новая', stripe: '#A855F7', client: 'ООО "Вектор"' },
  { name: 'Обзвон базы лидов', type: 'Другое', status: 'В работе', stripe: '#14B8A6', client: 'ИП Петров С.Н.' },
  { name: 'Отправить КП по РКО в ООО "Ромашка"', type: 'Другое', status: 'На проверке', stripe: '#F97316', client: 'ООО "Ромашка"' },
  { name: 'Ревью задач с командой', type: 'Встреча с клиентом', status: 'Завершена', stripe: '#6366F1', client: '—' },
  { name: 'Проверить статус заявок в CRM', type: 'Другое', status: 'В работе', stripe: '#0EA5E9', client: 'ООО «Агропромышленный комплекс Поволжье»' },
  { name: 'Подготовить презентацию для встречи', type: 'Подготовка отчета', status: 'Новая', stripe: '#EC4899', client: 'ООО «Научно-производственное объединение Технологии»' },
  { name: 'Созвон с менеджером по лидам', type: 'Встреча с клиентом', status: 'Завершена', stripe: '#10B981', client: '—' },
];

export default function TasksPage({ onTaskSelect }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
        padding: '24px 24px 16px',
        background: '#FFFFFF',
        fontFamily: "'VTBGroupUI', -apple-system, BlinkMacSystemFont, sans-serif",
      }}>
        {/* Заголовок + Создать задачу */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          flexShrink: 0,
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '32px',
            color: '#111827',
          }}>Задачи</h1>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#2563EB',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >Создать задачу</a>
        </div>

        {/* Фильтры — одинаковый размер на всю ширину */}
        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'stretch',
          marginBottom: '16px',
          flexShrink: 0,
          width: '100%',
        }}>
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            border: '1px solid #D5D8DE',
            borderRadius: '8px',
            background: '#FFFFFF',
            fontSize: '14px',
            color: '#4F525A',
            minWidth: 0,
          }}>
            <span style={{ flex: 1, minWidth: 0 }}>По плановой дате исполнения</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            border: '1px solid #D5D8DE',
            borderRadius: '8px',
            background: '#FFFFFF',
            fontSize: '14px',
            color: '#111827',
            minWidth: 0,
          }}>
            <span style={{ flex: 1, minWidth: 0 }}>10.01.2025 - 20.01.2025</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            border: '1px solid #D5D8DE',
            borderRadius: '8px',
            background: '#FFFFFF',
            fontSize: '14px',
            color: '#9CA3AF',
            minWidth: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span>Поиск по задачам</span>
          </div>
        </div>

        {/* Таблица */}
        <div className="ios-scroll" style={{ flex: 1, minHeight: 0, overflow: 'auto', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '28%' }} />
              <col style={{ width: '14%' }} />
              <col style={{ width: '10%' }} />
              {/* Клиент = ширина Наименование */}
              <col style={{ width: '28%' }} />
              <col style={{ width: '12%' }} />
              {/* Срок в 2 раза шире (было 4%) */}
              <col style={{ width: '8%' }} />
            </colgroup>
            <thead>
              <tr style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                {['Наименование', 'Тип', 'Статус', 'Клиент', 'Точка продаж', 'Срок'].map((col, colIdx) => (
                  <th
                    key={col}
                    style={{
                      position: 'sticky',
                      top: 0,
                      zIndex: 1,
                      background: '#FFFFFF',
                      padding: '16px 0',
                      paddingLeft: colIdx === 0 ? 16 : undefined,
                      paddingRight: colIdx === 5 ? 16 : undefined,
                      textAlign: 'left',
                      fontWeight: '500',
                      color: '#22242A',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      boxShadow: '0 1px 0 0 #E5E7EB',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      {col}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.6 }}>
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TASKS.map((task, idx) => {
                const statusStyle = STATUS_STYLES[task.status] || { bg: '#F3F4F6', color: '#4F525A' };
                return (
                  <tr
                    key={idx}
                    onClick={() => onTaskSelect?.(task)}
                    style={{
                      borderBottom: idx < TASKS.length - 1 ? '1px solid #F3F4F6' : 'none',
                      cursor: onTaskSelect ? 'pointer' : 'default',
                    }}
                  >
                    <td style={{ padding: 0, color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, overflow: 'hidden' }}>
                        <div style={{
                          width: '4px',
                          height: '40px',
                          borderRadius: '2px',
                          background: task.stripe,
                          flexShrink: 0,
                        }}/>
                        <span style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B7280' }}>
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                        </span>
                        <span style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>{task.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: 0, color: '#4F525A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{task.type}</span>
                    </td>
                    <td style={{ padding: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 400,
                        background: statusStyle.bg,
                        color: statusStyle.color,
                      }}>
                        {task.status}
                      </span>
                    </td>
                    <td style={{ padding: 0, color: '#4F525A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{task.client}</span>
                    </td>
                    <td style={{ padding: 0, color: '#4F525A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>ОО «Мурино» Филиала №7806</span>
                    </td>
                    <td style={{ padding: 0, color: '#4F525A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>30 мая</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
