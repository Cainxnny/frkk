import React, { useState, useEffect, useRef } from 'react';

/**
 * Карточка клиента — открывается по кнопке «Вернуться к клиенту» в шапке.
 * Лэйаут: шапка клиента (отдельный блок) + табы,
 * под табами — два столбца: слева меню разделов, справа контент реквизитов.
 */
const CLIENT_NAME = 'ООО «ОБЩЕСТВО ЮИКС ЮАЙ РЕШЕНИЙ»';
const SUB_NAV_ITEMS = [
  'Реквизиты',
  'Виды деятельности',
  'Документы',
  'Совладельцы',
  'Исполнительные органы',
];
const TABS = [
  'Основное', 'Контакты', 'СПАРК', 'Представители', 'Продукты', 'Заявки',
  'Операции', 'Лиды', 'Предложения', 'Досье', 'Обращения', 'Отчет', 'Клиентская команда',
];
const REQUISITES_INTERNAL = [
  { label: 'Полное наименование', value: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ЮИКС ЮАЙ РЕШЕНИЯ» LLC <UIKS UAI RESHENIYA>' },
  { label: 'ИНН', value: '165039734691' },
  { label: 'ОГРН', value: '320040000009321' },
  { label: 'КПП', value: '165001001' },
  { label: 'ОКВЭД', value: '64.19' },
  { label: 'ОКПО', value: '12345678' },
  { label: 'ОКАТО', value: '65405000000' },
  { label: 'ОКТМО', value: '65701000' },
  { label: 'Дата регистрации', value: '1 июля 1999 г.' },
  { label: 'Дата постановки на учет ФНС', value: '15 августа 1999 г.' },
  { label: 'Дата заведения клиента', value: '10 января 2020 г.' },
  { label: 'Дата обновления', value: '27 января 2026 г.' },
];

const PRODUCT_SECTIONS = [
  { label: 'Счета', count: 3, active: true },
  { label: 'Спец. счета', count: 0 },
  { label: 'Небанк. сервисы', count: 0 },
  { label: 'Страх. брокер', count: 0 },
  { label: 'Страх. имущество', count: 0 },
  { label: 'Эквайринг', count: 0 },
  { label: 'Депозиты', count: 0 },
  { label: 'Гарантии', count: 0 },
  { label: 'Кредиты', count: 0 },
  { label: 'Корп. управление', count: 0 },
  { label: 'Мультиконтроль', count: 0 },
  { label: 'ДБО', count: 0 },
  { label: 'Бизнес-карты', count: 0 },
];

const PRODUCTS = [
  {
    contract: '2243...5899',
    account: '5889...8950',
    detailsLink: 'Показать',
    balance: '12 млн',
    currency: 'USD',
    status: 'Открыт',
    statusColor: '#22C55E',
    type: 'Валютный',
    signDate: '15.07.2022',
    closeDate: '—',
    plannedClose: '15.07.2023',
  },
  {
    contract: 'DP44...5897',
    account: '5889...4567',
    detailsLink: 'Показать',
    balance: '2 млн',
    currency: 'RUB',
    status: 'Закрыт',
    statusColor: '#EF4444',
    type: 'Расчетный',
    signDate: '15.07.2022',
    closeDate: '—',
    plannedClose: '15.07.2023',
  },
  {
    contract: 'DP44...5897',
    account: '5889...5078',
    detailsLink: 'Показать',
    balance: '350 тыс.',
    currency: 'RUB',
    status: 'Закрыт',
    statusColor: '#EF4444',
    type: 'Расчетный',
    signDate: '15.07.2022',
    closeDate: '—',
    plannedClose: '15.07.2023',
  },
];

export default function ClientCardPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubNav, setActiveSubNav] = useState(0);
  const tabsContainerRef = useRef(null);
  const tabsRefs = useRef([]);
  const [visibleTabsCount, setVisibleTabsCount] = useState(TABS.length);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  useEffect(() => {
    const measureTabs = () => {
      const container = tabsContainerRef.current;
      if (!container) return;
      const containerWidth = container.offsetWidth;
      let used = 0;
      let count = TABS.length;

      // Оставляем место под кнопку \"Показать все\" (если понадобится)
      const showMoreButtonReserve = 120;

      for (let i = 0; i < TABS.length; i++) {
        const el = tabsRefs.current[i];
        if (!el) continue;
        const w = el.offsetWidth || 0;
        if (used + w + showMoreButtonReserve > containerWidth) {
          count = i;
          break;
        }
        used += w;
      }
      setVisibleTabsCount(count);
    };

    measureTabs();
    window.addEventListener('resize', measureTabs);
    return () => window.removeEventListener('resize', measureTabs);
  }, []);

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
        {/* Шапка клиента */}
        <div style={{ flexShrink: 0, marginBottom: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
            {/* Строка: слева — группа + наименование, справа — две колонки (численность | выручка) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '24px',
              }}
            >
              <div style={{ width: '50%', minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: 400, color: '#4F525A', marginBottom: '4px' }}>
                  Группа компаний МЕЧЕЛ ЛОГИСТИК
                </div>
                <h1
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '36px',
                    color: '#111827',
                    margin: 0,
                  }}
                >
                  {CLIENT_NAME}
                </h1>
              </div>
              <div style={{ width: '50%', minWidth: 0, display: 'flex', gap: '24px' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 400, color: '#4F525A', marginBottom: '4px' }}>
                    Численность, 2016 г.
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', lineHeight: '36px', color: '#111827' }}>
                    29 чел.
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 400, color: '#4F525A', marginBottom: '4px' }}>
                    Выручка, 2025 г.
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '24px', fontWeight: '600', lineHeight: '36px', color: '#111827' }}>
                      183, 2 млн ₽
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '4px', height: '24px' }}>
                      {[0, 1, 2, 3].map((i) => (
                        <span
                          key={i}
                          style={{
                            width: '6px',
                            height: i === 1 ? '20px' : '10px',
                            borderRadius: '3px',
                            background: i === 1 ? '#2563EB' : '#E5E7EB',
                          }}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                background: '#32C665',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '500',
              }}
            >
              Клиент
            </span>
            <span
              style={{
                background: '#E5F0FF',
                color: '#1D4ED8',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '500',
              }}
            >
              Массовый сегмент СМБ
            </span>
            <span style={{ fontSize: '14px', color: '#2563EB', cursor: 'pointer' }}>
              Еще...
            </span>
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <button
              style={{
                background: '#2563EB',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              Оформить продукт
            </button>
            {['Написать письмо', 'Получить выписку', 'Посмотреть скидки и привилегии', 'Записать в ТП'].map((btn) => (
              <button
                key={btn}
                style={{
                  background: 'transparent',
                  color: '#2563EB',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* Табы */}
        <div style={{
          flexShrink: 0,
          borderBottom: '1px solid #D5D8DE',
          marginBottom: '16px',
        }}>
          <div
            ref={tabsContainerRef}
            style={{ display: 'flex', borderBottom: 'none', position: 'relative' }}
            className="ios-scroll"
          >
            {TABS.map((tab, idx) => {
              const isVisible = idx < visibleTabsCount;
              return (
                <button
                  key={idx}
                  ref={el => (tabsRefs.current[idx] = el)}
                  onClick={() => {
                    setActiveTab(idx);
                    setShowMoreMenu(false);
                  }}
                  style={{
                    padding: '12px 16px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: activeTab === idx ? '#2563EB' : '#4F525A',
                    borderBottom: activeTab === idx ? '2px solid #2563EB' : '2px solid transparent',
                    marginBottom: '-1px',
                    visibility: isVisible ? 'visible' : 'hidden',
                    position: isVisible ? 'static' : 'absolute',
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                >
                  {tab}
                </button>
              );
            })}

            {visibleTabsCount < TABS.length && (
              <div style={{ position: 'relative', marginLeft: 'auto' }}>
                <button
                  onClick={() => setShowMoreMenu(!showMoreMenu)}
                  style={{
                    padding: '12px 16px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                    fontSize: '14px',
                    color: '#2563EB',
                    borderBottom: showMoreMenu ? '2px solid #2563EB' : '2px solid transparent',
                    marginBottom: '-1px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#0046E2')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#2563EB')}
                >
                  Показать все
                </button>
                {showMoreMenu && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      background: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      boxShadow:
                        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      zIndex: 1000,
                      minWidth: '200px',
                      marginTop: '4px',
                    }}
                  >
                    {TABS.slice(visibleTabsCount).map((tab, idx) => {
                      const actualIdx = visibleTabsCount + idx;
                      return (
                        <button
                          key={actualIdx}
                          onClick={() => {
                            setActiveTab(actualIdx);
                            setShowMoreMenu(false);
                          }}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            fontWeight: '400',
                            textAlign: 'left',
                            fontSize: '14px',
                            color: activeTab === actualIdx ? '#2563EB' : '#374151',
                            borderBottom:
                              idx < TABS.slice(visibleTabsCount).length - 1
                                ? '1px solid #F3F4F6'
                                : 'none',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = '#F9FAFB';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          {tab}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Контент под табами */}
        {TABS[activeTab] === 'Продукты' ? (
          // Лэйаут «Продукты»: слева продуктовые разделы, справа таблица продуктов
          <div style={{ flex: 1, display: 'flex', gap: '24px', minHeight: 0, minWidth: 0 }}>
            <div className="ios-scroll" style={{ width: '220px', flexShrink: 0, overflowY: 'auto' }}>
              {PRODUCT_SECTIONS.map((item, idx) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '2px',
                    fontSize: '14px',
                    background: idx === 0 ? '#F3F4F6' : 'transparent',
                    color: idx === 0 ? '#2563EB' : '#4F525A',
                  }}
                >
                  <span>{item.label}</span>
                  <span style={{ fontSize: '13px', color: '#9CA3AF' }}>{item.count}</span>
                </div>
              ))}
            </div>
            <div className="ios-scroll" style={{ flex: 1, minWidth: 0, overflowY: 'auto', overflowX: 'hidden' }}>
              <div
                style={{
                  border: '1px solid #E5E7EB',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  padding: '16px 16px 8px',
                  minWidth: 0,
                  overflow: 'hidden',
                }}
              >
                {/* Поиск */}
                <div
                  style={{
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '9999px',
                    border: '1px solid #D5D8DE',
                    padding: '6px 12px',
                    maxWidth: '260px',
                  }}
                >
                  <input
                    type="text"
                    placeholder="Поиск"
                    style={{
                      border: 'none',
                      outline: 'none',
                      flex: 1,
                      fontSize: '13px',
                      color: '#111827',
                    }}
                  />
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    style={{ flexShrink: 0 }}
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>

                {/* Таблица продуктов — горизонтальный скролл при сужении окна (overflow-x: scroll чтобы скроллбар был виден при ресайзе окна) */}
                <div
                  className="ios-scroll products-table-scroll"
                  style={{ width: '100%', minWidth: 0, overflowX: 'scroll', overflowY: 'hidden', borderRadius: '12px' }}
                >
                  <table
                    style={{
                      width: '100%',
                      minWidth: '1200px',
                      borderCollapse: 'collapse',
                      fontSize: '13px',
                    }}
                  >
                    <thead>
                      <tr style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                        {[
                          'Номер договора',
                          'Номер счета',
                          'Реквизиты',
                          'Остаток',
                          'Валюта',
                          'Статус',
                          'Тип счета',
                          'Дата подписания',
                          'Дата закрытия',
                          'Плановое закрытие',
                        ].map((col, idx) => (
                          <th
                            key={col}
                            style={{
                              padding: '10px 12px',
                              textAlign: 'left',
                              fontWeight: '500',
                              color: '#6B7280',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              {col}
                              {['Валюта', 'Статус'].includes(col) && (
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  style={{ opacity: 0.6 }}
                                >
                                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {PRODUCTS.map((p, idx) => (
                        <tr
                          key={idx}
                          style={{
                            borderBottom: idx < PRODUCTS.length - 1 ? '1px solid #F3F4F6' : 'none',
                          }}
                        >
                          <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>{p.contract}</td>
                          <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>{p.account}</td>
                          <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>
                            <span style={{ color: '#2563EB', cursor: 'pointer' }}>{p.detailsLink}</span>
                          </td>
                          <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>{p.balance}</td>
                          <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>{p.currency}</td>
                          <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>
                            <span
                              style={{
                                display: 'inline-block',
                                padding: '4px 10px',
                                borderRadius: '4px',
                                fontSize: '12px',
                                fontWeight: 400,
                                background: p.status === 'Открыт' ? '#E5F5EC' : '#FFE5E5',
                                color: p.status === 'Открыт' ? '#0F766E' : '#B91C1C',
                              }}
                            >
                              {p.status}
                            </span>
                          </td>
                          <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>{p.type}</td>
                          <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>{p.signDate}</td>
                          <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>{p.closeDate}</td>
                          <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>{p.plannedClose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Лэйаут «Основное»: слева меню Реквизиты и т.п., справа панель реквизитов
          <div style={{ flex: 1, display: 'flex', gap: '24px', minHeight: 0 }}>
            <div className="ios-scroll" style={{ width: '220px', flexShrink: 0, overflowY: 'auto' }}>
              {SUB_NAV_ITEMS.map((label, idx) => (
                <div
                  key={label}
                  onClick={() => setActiveSubNav(idx)}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '4px',
                    fontSize: '14px',
                    background: activeSubNav === idx ? '#F3F4F6' : 'transparent',
                    color: activeSubNav === idx ? '#2563EB' : '#4F525A',
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="ios-scroll" style={{ flex: 1, minWidth: 0, overflowY: 'auto' }}>
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    border: '1px solid #E5E7EB',
                    borderRadius: '16px',
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>
                      Из внутренних источников
                    </div>
                    {REQUISITES_INTERNAL.map((row, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          fontSize: '14px',
                        }}
                      >
                        <span style={{ width: '50%', flexShrink: 0, color: '#6B7280' }}>{row.label}</span>
                        <span style={{ width: '50%', color: '#111827', wordBreak: 'break-word' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    border: '1px solid #E5E7EB',
                    borderRadius: '16px',
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>
                      Из внешних источников
                    </div>
                    {REQUISITES_INTERNAL.map((row, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          fontSize: '14px',
                        }}
                      >
                        <span style={{ width: '50%', flexShrink: 0, color: '#6B7280' }}>{row.label}</span>
                        <span style={{ width: '50%', color: '#111827', wordBreak: 'break-word' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
