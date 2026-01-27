import React, { useState } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * ВИТРИНА РКО - Точная реализация по макету Figma
 * ═══════════════════════════════════════════════════════════════════════
 */

export default function LayoutDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeNavItem, setActiveNavItem] = useState(5);
  const [showLabels, setShowLabels] = useState(true);

  const tabs = [
    'Все', 'Расчеты в рублях', 'Кассовые операции', 'Инкассация', 
    'Пакеты', 'ДБО', 'СМС-информирование', 'Выписки и справки', 'Ведение счета'
  ];

  const navMenuItems = [
    { icon: '☆', label: 'Избранные продукты' },
    { icon: '🎁', label: 'Акции' },
    { divider: true },
    { label: 'Счета' },
    { label: 'Спец. счета' },
    { label: 'РКО', active: true },
    { label: 'Бизнес-карты' },
    { label: 'Небанковские сервисы' },
    { label: 'Касса и эквайринг' },
    { label: 'Депозиты и остатки' },
    { label: 'Регистрация бизнеса и КЭП' },
    { label: 'Кредиты' },
    { label: 'Гарантии и аккредитивы' },
    { label: 'Корп. управление' },
    { label: 'ВЭД' },
    { divider: true },
    { label: 'Расчёты с самозанятыми' },
    { label: 'Зарплатный проект' },
  ];

  const cards = [
    { title: 'Пакет «На старте»', bonus: 'Не начисляются', bonusGray: true },
    { title: 'Пакет «Всё по делу»', bonus: '10-30 баллов' },
    { title: 'Пакет «Всё включено»', bonus: '20 баллов', badge: 'Новое' },
    { title: 'Пакет «Большие обороты»', bonus: '20 баллов' },
    { title: 'Периодический перевод', bonus: 'Не начисляются', bonusGray: true, checkmark: true },
    { title: 'Платежные поручения', bonus: '10-30 баллов' },
    { title: 'Кассовые заявки', bonus: '20 баллов' },
    { title: 'Расходные документы', bonus: '20 баллов' },
    { title: 'ДБО', bonus: 'Не начисляются', bonusGray: true },
    { title: 'Установка полномочий', bonus: '10-30 баллов' },
    { title: 'Пакет СМС «Безопасность и...', bonus: '20 баллов' },
    { title: 'СМС-информирование', bonus: '20 баллов' },
    { title: 'Пакет «На старте»', bonus: 'Не начисляются', bonusGray: true },
    { title: 'Пакет «Всё по делу»', bonus: '10-30 баллов' },
    { title: 'Пакет «Всё включено»', bonus: '20 баллов', badge: 'Новое' },
    { title: 'Пакет «Большие обороты»', bonus: '20 баллов' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        /* iOS-style scrollbar - 6px, transparent, overlay */
        .ios-scroll::-webkit-scrollbar {
          width: 6px;
          background: transparent;
        }
        .ios-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .ios-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        .ios-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.35);
        }
        .ios-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }
        
        .demo-label {
          position: fixed;
          color: white;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 4px;
          z-index: 9999;
          pointer-events: none;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        }
        
        .nav-icon:hover {
          background: rgba(0,0,0,0.04);
        }
        
        .menu-item:hover {
          background: rgba(0,0,0,0.03);
        }
        
        .card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        
        .tab-btn:hover {
          color: #111827;
        }
      `}</style>
      
      <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: '14px',
        color: '#1F2937',
        background: '#F5F5F5',
      }}>

        {/* Toggle Button */}
        <button 
          onClick={() => setShowLabels(!showLabels)}
          style={{
            position: 'fixed',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            background: showLabels ? '#1F2937' : '#2563EB',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '13px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          {showLabels ? 'Скрыть метки зон' : 'Показать метки зон'}
        </button>

        {/* ═══════════════════════════════════════════════════════════
            FIXED: Header - прозрачный фон, на сером фоне страницы
            ═══════════════════════════════════════════════════════════ */}
        <header style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '56px',
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          zIndex: 1000,
          gap: '12px',
        }}>
          {/* Logo */}
          <div style={{ 
            width: '40px', 
            height: '40px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginRight: '8px',
          }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M4 8h24M4 16h24M4 24h16" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Status badges */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ 
              background: 'white', 
              padding: '8px 12px', 
              borderRadius: '8px',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}>
              <span style={{ color: '#6B7280' }}>В очереди:</span>
              <span style={{ color: '#2563EB', fontWeight: '600' }}>23 клиента</span>
            </div>
            <div style={{ 
              background: 'white', 
              padding: '8px 12px', 
              borderRadius: '8px',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}>
              <span style={{ color: '#6B7280' }}>Нераспределенные лиды:</span>
              <span style={{ fontWeight: '600' }}>57</span>
              <span style={{ 
                background: '#F97316', 
                color: 'white', 
                padding: '2px 6px', 
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '500',
              }}>2</span>
            </div>
            <div style={{ 
              background: 'white', 
              padding: '8px 12px', 
              borderRadius: '8px',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}>
              <span style={{ color: '#6B7280' }}>Назначенные лиды:</span>
              <span style={{ fontWeight: '600' }}>57</span>
              <span style={{ 
                background: '#22C55E', 
                color: 'white', 
                padding: '2px 6px', 
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '500',
              }}>2</span>
            </div>
          </div>

          {/* Right section */}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}>
              <div style={{
                padding: '10px 12px',
                fontSize: '13px',
                color: '#6B7280',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                borderRight: '1px solid #E5E7EB',
              }}>
                Везде
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </div>
              <input 
                type="text"
                placeholder="Искать..."
                style={{
                  padding: '10px 12px',
                  border: 'none',
                  width: '120px',
                  fontSize: '13px',
                  outline: 'none',
                }}
              />
            </div>
            <button style={{
              width: '40px', 
              height: '40px',
              background: '#2563EB',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <button style={{
              width: '40px', 
              height: '40px',
              background: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              position: 'relative',
              color: '#6B7280',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span style={{
                position: 'absolute',
                top: '6px', 
                right: '6px',
                width: '16px', 
                height: '16px',
                background: '#EF4444',
                borderRadius: '50%',
                fontSize: '10px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '500',
              }}>5</span>
            </button>
            <button style={{
              background: '#2563EB',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 16px',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '13px',
            }}>
              Вернуться к клиенту
            </button>
          </div>
        </header>

        {/* ═══════════════════════════════════════════════════════════
            FIXED: Nav Bar - прозрачный фон, иконки на сером фоне
            ═══════════════════════════════════════════════════════════ */}
        <nav style={{
          position: 'fixed',
          top: '56px', 
          left: 0,
          width: '72px',
          height: 'calc(100vh - 56px)',
          background: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '24px 12px',
          zIndex: 900,
          gap: '4px',
        }}>
          {/* Top icons */}
          {['🏠', '📅', '📄', '🕐', '🛒', '⊞'].map((icon, idx) => (
            <div 
              key={idx} 
              className="nav-icon"
              style={{
                width: '48px', 
                height: '48px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '12px', 
                cursor: 'pointer',
                background: idx === 4 ? '#E0F2FE' : 'transparent',
                color: idx === 4 ? '#2563EB' : '#6B7280',
                fontSize: '20px',
                transition: 'background 0.15s',
              }}
            >
              {icon}
            </div>
          ))}
          
          <div style={{ flex: 1 }} />
          
          {/* Bottom icons with labels */}
          <div 
            className="nav-icon"
            style={{
              width: '48px', 
              height: '56px',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '12px', 
              cursor: 'pointer',
              color: '#6B7280',
              fontSize: '18px',
              gap: '2px',
              transition: 'background 0.15s',
            }}
          >
            <span>СБ</span>
            <span style={{ fontSize: '9px' }}>Сфера</span>
          </div>
          <div 
            className="nav-icon"
            style={{
              width: '48px', 
              height: '48px',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '12px', 
              cursor: 'pointer',
              color: '#6B7280',
              fontSize: '20px',
              transition: 'background 0.15s',
            }}
          >
            ❓
          </div>
          <div 
            className="nav-icon"
            style={{
              width: '48px', 
              height: '48px',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '12px', 
              cursor: 'pointer',
              color: '#6B7280',
              fontSize: '20px',
              transition: 'background 0.15s',
            }}
          >
            ↪
          </div>
        </nav>

        {/* ═══════════════════════════════════════════════════════════
            FIXED: Client Sidebar - белый фон, скругления сверху
            ═══════════════════════════════════════════════════════════ */}
        <aside className="ios-scroll" style={{
          position: 'fixed',
          top: '80px', 
          right: '24px',
          width: '360px',
          height: 'calc(100vh - 104px)',
          background: '#FFFFFF',
          borderRadius: '16px',
          zIndex: 900,
          overflowY: 'auto',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        }}>
          {/* Client Card */}
          <div style={{ padding: '24px', borderBottom: '1px solid #F3F4F6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={{ fontSize: '13px', color: '#9CA3AF' }}>ИНН 165039734691</div>
              <span style={{ 
                background: '#2563EB', 
                color: 'white', 
                padding: '4px 10px', 
                borderRadius: '6px', 
                fontSize: '12px',
                fontWeight: '500',
              }}>Клиент</span>
            </div>
            <div style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              lineHeight: 1.3, 
              marginBottom: '20px',
              color: '#111827',
            }}>
              ООО «ОБЩЕСТВО ЮИКС ЮАЙ РЕШЕНИЙ»
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#9CA3AF' }}>Представитель</span>
                <span style={{ 
                  background: '#FEF3C7', 
                  color: '#B45309', 
                  padding: '4px 10px', 
                  borderRadius: '6px', 
                  fontSize: '12px',
                  fontWeight: '500',
                }}>ЕИО</span>
              </div>
              <div style={{ fontWeight: '600', marginBottom: '16px', color: '#111827', lineHeight: 1.4 }}>
                Константинопальский Константин Константинович
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#22C55E', fontSize: '16px' }}>✓</span>
                  <span style={{ fontSize: '14px', color: '#374151' }}>+7 (912) 123-12-34</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" style={{ marginLeft: 'auto' }}>
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#25D366', fontSize: '16px' }}>📱</span>
                  <span style={{ fontSize: '14px', color: '#374151' }}>44 55 873644</span>
                </div>
              </div>
            </div>

            <button style={{
              width: '100%',
              padding: '12px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#2563EB',
              fontWeight: '500',
              fontSize: '14px',
            }}>
              <span style={{ fontSize: '18px' }}>+</span>
              Создать лид
            </button>
          </div>

          {/* Leads Section */}
          <div style={{ padding: '24px', borderBottom: '1px solid #F3F4F6' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontWeight: '600', color: '#111827' }}>Лиды</span>
              <span style={{ 
                background: '#FEE2E2', 
                color: '#DC2626', 
                borderRadius: '10px', 
                padding: '2px 8px', 
                fontSize: '12px',
                fontWeight: '600',
                marginLeft: '8px',
              }}>4</span>
              <span style={{ marginLeft: 'auto', color: '#2563EB', fontSize: '13px', cursor: 'pointer', fontWeight: '500' }}>Показать все</span>
            </div>
            {[
              { text: 'РКО' },
              { text: 'Управление торговлей: Мой...' },
            ].map((item, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '12px 0',
                borderTop: i > 0 ? '1px solid #F9FAFB' : 'none',
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: '#FEF3C7', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '12px',
                  fontSize: '18px',
                }}>
                  🧲
                </div>
                <span style={{ flex: 1, fontSize: '14px', color: '#374151' }}>{item.text}</span>
                <span style={{ 
                  background: '#D1FAE5', 
                  color: '#059669', 
                  padding: '4px 10px', 
                  borderRadius: '6px', 
                  fontSize: '12px',
                  fontWeight: '500',
                }}>Мой</span>
              </div>
            ))}
          </div>

          {/* Offers Section */}
          <div style={{ padding: '24px', borderBottom: '1px solid #F3F4F6' }}>
            <div style={{ fontWeight: '600', marginBottom: '16px', color: '#111827' }}>Предложите клиенту</div>
            {[
              { title: 'Сопровождение контракта ВЭД', desc: 'Совпадение по ОГРН: У клиента есть международные расчеты' },
              { title: 'Скидка на пакет «Большие обороты»', desc: 'Стимулирующая акция в рамках маркетинговой кампании' },
            ].map((offer, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                gap: '12px', 
                padding: '12px 0',
                borderTop: i > 0 ? '1px solid #F9FAFB' : 'none',
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: '#DBEAFE', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '18px',
                }}>
                  🎁
                </div>
                <div>
                  <div style={{ fontWeight: '500', fontSize: '14px', marginBottom: '4px', color: '#111827' }}>{offer.title}</div>
                  <div style={{ color: '#6B7280', fontSize: '13px', lineHeight: 1.4 }}>{offer.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tasks Section */}
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontWeight: '600', color: '#111827' }}>Задачи</span>
              <span style={{ 
                background: '#FEE2E2', 
                color: '#DC2626', 
                borderRadius: '10px', 
                padding: '2px 8px', 
                fontSize: '12px',
                fontWeight: '600',
                marginLeft: '8px',
              }}>8</span>
              <span style={{ marginLeft: 'auto', color: '#2563EB', fontSize: '13px', cursor: 'pointer', fontWeight: '500' }}>Показать все</span>
            </div>
            {[
              { text: 'Распечатать титульный лист', badge: 'Новая', badgeColor: '#D1FAE5', textColor: '#059669' },
              { text: 'Обновить сведения по СЮЛ', badge: 'В работе', badgeColor: '#FEF3C7', textColor: '#B45309' },
            ].map((task, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '12px 0',
                borderTop: i > 0 ? '1px solid #F9FAFB' : 'none',
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: '#EDE9FE', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '12px',
                  fontSize: '18px',
                }}>
                  📋
                </div>
                <span style={{ flex: 1, fontSize: '14px', color: '#374151' }}>{task.text}</span>
                <span style={{ 
                  background: task.badgeColor, 
                  color: task.textColor, 
                  padding: '4px 10px', 
                  borderRadius: '6px', 
                  fontSize: '12px',
                  fontWeight: '500',
                }}>{task.badge}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* ═══════════════════════════════════════════════════════════
            MAIN CONTENT AREA - белый прямоугольник со скруглениями
            Меню разделов ВНУТРИ этого блока
            ═══════════════════════════════════════════════════════════ */}
        <main style={{
          position: 'fixed',
          top: '80px',
          left: '96px',
          right: '400px',
          bottom: '72px',
          background: '#FFFFFF',
          borderRadius: '16px',
          display: 'flex',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        }}>
          
          {/* ═══════════════════════════════════════════════════════
              SCROLLABLE: Navigation Menu - ВНУТРИ белого блока
              ═══════════════════════════════════════════════════════ */}
          <div className="ios-scroll" style={{
            width: '240px',
            flexShrink: 0,
            padding: '24px 16px',
            overflowY: 'auto',
            borderRight: '1px solid #F3F4F6',
          }}>
            {navMenuItems.map((item, idx) => {
              if (item.divider) {
                return <div key={idx} style={{ height: '1px', background: '#F3F4F6', margin: '12px 0' }} />;
              }
              const isActive = item.active;
              return (
                <div
                  key={idx}
                  className="menu-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: isActive ? '#EFF6FF' : 'transparent',
                    color: isActive ? '#2563EB' : '#374151',
                    fontWeight: isActive ? '500' : '400',
                    fontSize: '14px',
                    transition: 'background 0.15s',
                    marginBottom: '2px',
                  }}
                >
                  {item.icon && <span style={{ color: isActive ? '#2563EB' : '#9CA3AF', fontSize: '16px' }}>{item.icon}</span>}
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Content Area */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            
            {/* ═══════════════════════════════════════════════════
                FIXED (sticky): Title + Tabs
                ═══════════════════════════════════════════════════ */}
            <div style={{
              padding: '24px 24px 0',
              flexShrink: 0,
              background: '#FFFFFF',
            }}>
              <h1 style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                marginBottom: '24px',
                color: '#111827',
              }}>РКО</h1>
              <div style={{
                display: 'flex',
                borderBottom: '1px solid #F3F4F6',
              }}>
                {tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    className="tab-btn"
                    onClick={() => setActiveTab(idx)}
                    style={{
                      padding: '12px 16px',
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      fontWeight: '500',
                      whiteSpace: 'nowrap',
                      fontSize: '14px',
                      color: activeTab === idx ? '#2563EB' : '#6B7280',
                      borderBottom: activeTab === idx ? '2px solid #2563EB' : '2px solid transparent',
                      marginBottom: '-1px',
                      transition: 'color 0.15s',
                    }}
                  >
                    {tab}
                  </button>
                ))}
                <button style={{
                  padding: '12px 16px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: '#9CA3AF',
                  fontSize: '18px',
                  marginLeft: 'auto',
                }}>•••</button>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════
                SCROLLABLE: Cards Grid
                ═══════════════════════════════════════════════════ */}
            <div className="ios-scroll" style={{
              flex: 1,
              overflowY: 'auto',
              padding: '24px',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
              }}>
                {cards.map((card, idx) => (
                  <div 
                    key={idx} 
                    className="card"
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.2s',
                      border: '1px solid #F3F4F6',
                    }}
                  >
                    <div style={{
                      height: '110px',
                      background: '#F8FAFC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}>
                      {card.badge && (
                        <span style={{
                          position: 'absolute',
                          top: '10px', 
                          right: '10px',
                          background: '#22C55E',
                          color: 'white',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '500',
                        }}>{card.badge}</span>
                      )}
                      {card.checkmark && (
                        <div style={{
                          position: 'absolute',
                          top: '10px', 
                          right: '10px',
                          width: '24px', 
                          height: '24px',
                          background: '#22C55E',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                        </div>
                      )}
                      {/* Placeholder illustration */}
                      <div style={{
                        width: '80px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '32px',
                      }}>
                        📦
                      </div>
                    </div>
                    <div style={{ padding: '16px' }}>
                      <div style={{ 
                        fontWeight: '500', 
                        marginBottom: '8px',
                        fontSize: '14px',
                        color: '#111827',
                        lineHeight: 1.3,
                      }}>{card.title}</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center' 
                      }}>
                        <span style={{ 
                          color: card.bonusGray ? '#9CA3AF' : '#F59E0B', 
                          fontSize: '13px',
                          fontWeight: card.bonusGray ? '400' : '500',
                        }}>
                          + {card.bonus}
                        </span>
                        <div style={{ display: 'flex', gap: '8px', color: '#D1D5DB' }}>
                          <span style={{ cursor: 'pointer', fontSize: '16px' }}>☆</span>
                          <span style={{ cursor: 'pointer', fontSize: '16px' }}>📖</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer style={{
          position: 'fixed',
          bottom: 0,
          left: '96px',
          right: '400px',
          height: '56px',
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          gap: '80px',
        }}>
          <div>
            <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '2px' }}>Телефон поддержки</div>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>+7 (499) 456-11-11</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '2px' }}>Создать обращение</div>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#2563EB' }}>Сфера. Обращения</div>
          </div>
        </footer>

        {/* Demo Labels */}
        {showLabels && (
          <>
            <div className="demo-label" style={{ top: '18px', left: '50%', transform: 'translateX(-50%)', background: '#22C55E' }}>
              🔒 FIXED: Header (прозрачный, 56px)
            </div>
            <div className="demo-label" style={{ top: '50%', left: '4px', transform: 'translateY(-50%) rotate(-90deg)', background: '#2563EB' }}>
              🔒 FIXED: NavBar (прозрачный, 72px)
            </div>
            <div className="demo-label" style={{ top: '50%', right: '24px', transform: 'translateY(-50%) rotate(90deg)', background: '#F59E0B' }}>
              🔒 FIXED: Sidebar (360px)
            </div>
            <div className="demo-label" style={{ top: '105px', left: '500px', background: '#8B5CF6' }}>
              🔒 STICKY: Заголовок РКО + Табы
            </div>
            <div className="demo-label" style={{ top: '400px', left: '120px', background: '#EC4899' }}>
              📜 SCROLL: Меню (внутри контента)
            </div>
            <div className="demo-label" style={{ top: '400px', left: '600px', background: '#06B6D4' }}>
              📜 SCROLL: Карточки
            </div>
          </>
        )}
      </div>
    </>
  );
}
