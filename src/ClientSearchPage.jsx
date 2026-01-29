import React, { useState, useEffect } from 'react';

/**
 * Поиск клиента — открывается по кнопке «Завершить работу с клиентом» из карточки клиента.
 * Табы: Поиск ЮЛ / Поиск ФЛ / Поиск ГК, поле ввода, кнопка «Найти», фильтры поиска (свитчер зависит от таба).
 */
const SEARCH_TABS = [
  { label: 'Поиск ЮЛ', icon: 'tab1' },
  { label: 'Поиск ФЛ', icon: 'tab2' },
  { label: 'Поиск ГК', icon: 'tab3' },
];
const SEARCH_FILTERS_YL = [
  'По ИНН',
  'По наименованию',
  'По номеру счёта',
  'По телефону',
  'По SLX ID',
  'По МДМ-коду',
];
const SEARCH_FILTERS_FL = [
  'По паспорту',
  'По ИНН',
  'По ID клиента',
];
const PASSPORT_DROPDOWN_OPTIONS = [
  'По Загран. паспорту',
  'По военному билету',
  'По паспорту иностранного гражданина',
  'По виду на жительство',
];

export default function ClientSearchPage() {
  const [activeSearchTab, setActiveSearchTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [passportDropdownOpen, setPassportDropdownOpen] = useState(false);

  const searchFilters = activeSearchTab === 1 ? SEARCH_FILTERS_FL : SEARCH_FILTERS_YL;
  const searchPlaceholder = activeSearchTab === 1
    ? 'Введите серию и номер паспорта'
    : 'Введите ИНН компании';

  useEffect(() => {
    setActiveFilter(0);
    setPassportDropdownOpen(false);
  }, [activeSearchTab]);

  const clampedActiveFilter = Math.min(activeFilter, searchFilters.length - 1);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          minHeight: 0,
          padding: '64px 48px 48px',
          background: '#FFFFFF',
          fontFamily: "'VTBGroupUI', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
          {/* Табы типа поиска */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '32px',
            }}
          >
            {SEARCH_TABS.map((tab, idx) => {
              const isActive = activeSearchTab === idx;
              const iconColor = isActive ? '#2563EB' : '#717681';
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveSearchTab(idx)}
                  style={{
                    padding: '12px 16px',
                    border: 'none',
                    borderBottom: isActive ? '2px solid #2563EB' : '2px solid transparent',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: isActive ? '#2563EB' : '#6B7280',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.15s, border-color 0.15s',
                  }}
                >
                  {tab.icon === 'tab1' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.34986 5.66563C8.34986 4.20207 9.53631 3.01562 10.9999 3.01562H12.9999C14.4634 3.01562 15.6499 4.20207 15.6499 5.66563C15.6499 6.02461 15.3588 6.31563 14.9999 6.31563C14.6409 6.31563 14.3499 6.02461 14.3499 5.66563C14.3499 4.92004 13.7454 4.31563 12.9999 4.31563H10.9999C10.2543 4.31563 9.64986 4.92004 9.64986 5.66563C9.64986 6.02461 9.35885 6.31563 8.99986 6.31563C8.64088 6.31563 8.34986 6.02461 8.34986 5.66563Z" fill={iconColor}/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.99512 10.4668C2.99512 8.80684 4.33512 7.46684 5.99512 7.46684L17.9991 7.46683C19.6491 7.46683 20.9991 8.80683 20.9991 10.4668L20.9991 16.9989C20.9991 18.6589 19.6591 19.9989 17.9991 19.9989H5.99512C4.33512 19.9989 2.99512 18.6589 2.99512 16.9989V10.4668ZM19.6991 10.4668C19.6991 9.52683 18.9391 8.76683 17.9991 8.76683L5.99512 8.76684C5.05512 8.76684 4.29512 9.52684 4.29512 10.4668V11.6387L4.29592 12.2024C4.29592 12.6449 4.45942 13.0719 4.75502 13.4012C5.09542 13.7804 5.58098 13.9971 6.09057 13.9971H17.9155C18.4212 13.9971 18.9031 13.7822 19.2411 13.406C19.535 13.0789 19.6975 12.6547 19.6975 12.215V11.6471H19.6991V10.4668ZM19.6991 14.7286C19.1824 15.0952 18.5601 15.2971 17.9155 15.2971H16.6499V16.7615C16.6499 17.1204 16.3588 17.4115 15.9999 17.4115C15.6409 17.4115 15.3499 17.1204 15.3499 16.7615V15.2971H8.64986V16.7631C8.64986 17.1221 8.35885 17.4131 7.99986 17.4131C7.64088 17.4131 7.34986 17.1221 7.34986 16.7631V15.2971H6.09057C5.4414 15.2971 4.81484 15.0932 4.29512 14.723V16.9989C4.29512 17.9389 5.05512 18.6989 5.99512 18.6989H17.9991C18.9391 18.6989 19.6991 17.9389 19.6991 16.9989V14.7286Z" fill={iconColor}/>
                    </svg>
                  )}
                  {tab.icon === 'tab2' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.56408 7.96802C7.26317 5.32002 9.33448 3 11.9995 3C14.6646 3 16.7359 5.32002 16.435 7.96803L16.1729 10.274C15.9317 12.3966 14.1358 14 11.9995 14C9.86328 14 8.06732 12.3966 7.82612 10.274L7.56408 7.96802ZM15.1433 7.82124L14.8813 10.1272C14.7147 11.5928 13.4746 12.7 11.9995 12.7C10.5245 12.7 9.28435 11.5928 9.1178 10.1272L8.85576 7.82124C8.64248 5.94439 10.1106 4.3 11.9995 4.3C13.8885 4.3 15.3566 5.94439 15.1433 7.82124Z" fill={iconColor}/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.28877 19.6984C4.89882 16.9532 7.3337 15 10.1459 15H13.8532C16.6654 15 19.1002 16.9532 19.7103 19.6984L19.8102 20.1481C19.9074 20.5853 19.5747 21 19.1269 21H4.87216C4.42434 21 4.09168 20.5853 4.18883 20.1481L4.28877 19.6984ZM13.8532 16.3C15.959 16.3 17.7948 17.6982 18.3699 19.7H5.62917C6.20425 17.6982 8.04002 16.3 10.1459 16.3H13.8532Z" fill={iconColor}/>
                    </svg>
                  )}
                  {tab.icon === 'tab3' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.82765 3C7.16261 3 5.09129 5.32002 5.3922 7.96802L5.65424 10.274C5.89544 12.3966 7.69141 14 9.82765 14C11.9639 14 13.7599 12.3966 14.0011 10.274L14.2631 7.96803C14.564 5.32002 12.4927 3 9.82765 3ZM12.7094 10.1272L12.9714 7.82124C13.1847 5.94439 11.7166 4.3 9.82765 4.3C7.93872 4.3 6.47061 5.94439 6.68389 7.82124L6.94593 10.1272C7.11248 11.5928 8.35258 12.7 9.82765 12.7C11.3027 12.7 12.5428 11.5928 12.7094 10.1272Z" fill={iconColor}/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.97402 15C5.16182 15 2.72694 16.9532 2.11689 19.6984L2.01695 20.1481C1.91981 20.5853 2.25246 21 2.70028 21H16.955C17.4028 21 17.7355 20.5853 17.6384 20.1481L17.5384 19.6984C16.9284 16.9532 14.4935 15 11.6813 15H7.97402ZM16.198 19.7C15.6229 17.6982 13.7872 16.3 11.6813 16.3H7.97402C5.86815 16.3 4.03238 17.6982 3.45729 19.7H16.198Z" fill={iconColor}/>
                      <path d="M14.1723 14C13.7922 14 13.6567 13.5382 13.8947 13.2419C13.9416 13.1835 13.9873 13.1241 14.0319 13.0638C14.196 12.8415 14.4473 12.7003 14.7187 12.6484C15.9438 12.4144 16.9086 11.4076 17.0541 10.1272L17.3161 7.82124C17.497 6.22931 16.4683 4.80463 14.9991 4.40876C14.6467 4.31378 14.3183 4.12676 14.0889 3.84284C14.0392 3.78144 13.9884 3.72105 13.9363 3.66173C13.7152 3.40992 13.8373 3 14.1723 3C16.8374 3 18.9087 5.32002 18.6078 7.96803L18.3458 10.274C18.1046 12.3966 16.3086 14 14.1723 14Z" fill={iconColor}/>
                      <path d="M19.3143 21C18.9716 21 18.7274 20.6484 18.7236 20.3058C18.7202 19.9919 18.9448 19.7 19.2587 19.7H20.5427C20.1057 18.1788 18.9407 17.0062 17.4824 16.5308C17.2738 16.4628 17.0977 16.3644 16.9626 16.1914C16.5991 15.726 16.9161 15.0365 17.4889 15.1804C19.65 15.7232 21.382 17.4437 21.8831 19.6984L21.983 20.1481C22.0802 20.5853 21.7475 21 21.2997 21H19.3143Z" fill={iconColor}/>
                    </svg>
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Блок поиска и свитчера — фиксированная ширина 724px */}
        <div style={{ width: '724px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'auto auto',
              gridTemplateColumns: '1fr',
              width: '100%',
              gap: '16px',
            }}
          >
            {/* Поле поиска: та же ширина, что и свитчер */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '0 8px 0 16px',
                border: '1px solid #D5D8DE',
                borderRadius: '8px',
                background: '#FFFFFF',
                minWidth: 0,
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '14px',
                  color: '#111827',
                  background: 'transparent',
                  minWidth: 0,
                  padding: '12px 0',
                }}
              />
              <button
                type="button"
                style={{
                  background: '#2563EB',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '14px',
                  flexShrink: 0,
                  margin: '6px 0',
                }}
              >
                Найти
              </button>
            </div>
            {/* Свитчер внизу — шире поиска, все пункты помещаются */}
            <div
              style={{
                display: 'flex',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                overflow: 'visible',
                background: '#FFFFFF',
                width: 'max-content',
              }}
            >
              {searchFilters.map((filter, idx) => {
                const isFLPassport = activeSearchTab === 1 && filter === 'По паспорту';
                return (
                  <div
                    key={filter}
                    style={{
                      position: 'relative',
                      borderRight: idx < searchFilters.length - 1 ? '1px solid #E5E7EB' : 'none',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        if (isFLPassport) {
                          setPassportDropdownOpen((v) => !v);
                        } else {
                          setPassportDropdownOpen(false);
                          setActiveFilter(idx);
                        }
                      }}
                      style={{
                        padding: '0 14px',
                        height: '36px',
                        boxSizing: 'border-box',
                        border: 'none',
                        borderRadius: 0,
                        background: clampedActiveFilter === idx ? '#F3F4F6' : 'transparent',
                        color: clampedActiveFilter === idx ? '#111827' : '#4F525A',
                        fontSize: '14px',
                        fontWeight: 400,
                        cursor: 'pointer',
                        transition: 'background 0.15s',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {filter}
                      {isFLPassport && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                          <path d="M7.78907 9.99632C7.78907 9.81632 7.85907 9.64632 7.99907 9.51632C8.26907 9.27632 8.67907 9.29632 8.91907 9.55632L12.0653 13.0495L15.0831 9.56022C15.3231 9.29022 15.7331 9.28022 16.0031 9.52022C16.2631 9.76022 16.2831 10.1702 16.0431 10.4402L12.5853 14.4195C12.3053 14.7295 11.8253 14.7295 11.5453 14.4195L7.95907 10.4363C7.83907 10.3063 7.78907 10.1563 7.78907 9.99632Z" fill="#717681"/>
                        </svg>
                      )}
                    </button>
                    {isFLPassport && passportDropdownOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          zIndex: 10,
                          marginTop: '4px',
                          minWidth: '100%',
                          background: '#FFFFFF',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          padding: '4px 0',
                        }}
                      >
                        {PASSPORT_DROPDOWN_OPTIONS.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setPassportDropdownOpen(false);
                            }}
                            style={{
                              display: 'block',
                              width: '100%',
                              padding: '10px 14px',
                              border: 'none',
                              background: 'transparent',
                              textAlign: 'left',
                              fontSize: '14px',
                              color: '#111827',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#F3F4F6';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Область результатов — пустая по умолчанию */}
        <div style={{ flex: 1, minHeight: 0, width: '100%', marginTop: '32px' }} />
      </div>
    </div>
  );
}
