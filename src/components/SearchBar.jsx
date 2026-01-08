import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);

  const searchData = [
    { title: 'الرئيسية', caption: 'الصفحة الرئيسية للمدرسة', url: '/' },
    { title: 'عن المدرسة', caption: 'معلومات عن مدرسة الحكمة الخاصة', url: '/#about' },
    { title: 'الأهداف والقيم', caption: 'رؤيتنا وقيمنا وأهدافنا التعليمية', url: '/goals-values' },
    { title: 'المناهج', caption: 'برامجنا التعليمية والمراحل الدراسية', url: '/#programs' },
    { title: 'الفروع', caption: 'مواقع فروع المدرسة في المناطق المختلفة', url: '/branches' },
    { title: 'فرص العمل', caption: 'الوظائف الشاغرة وتقديم السيرة الذاتية', url: '#' },
    { title: 'اتصل بنا', caption: 'معلومات التواصل والعناوين', url: '/#contact' },
    { title: 'التسجيل', caption: 'معلومات التسجيل والقبول والرسوم', url: '/admissions' },
    { title: 'الروضة', caption: 'مرحلة التعليم المبكر للأطفال', url: '/#kindergarten' },
    { title: 'المرحلة الابتدائية', caption: 'الصفوف من الأول إلى السادس', url: '/#elementary' },
    { title: 'الثانوية للبنين', caption: 'التعليم الثانوي للطلاب الذكور', url: '/#highschool-boys' },
    { title: 'الثانوية للبنات', caption: 'التعليم الثانوي للطالبات الإناث', url: '/#highschool-girls' }
  ];

  const performSearch = (query) => {
    if (query.length === 0) {
      setIsResultsVisible(false);
      return;
    }

    const filteredResults = searchData.filter(item =>
      item.title.includes(query) ||
      item.caption.includes(query) ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.caption.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
    setIsResultsVisible(true);
    setSearchQuery(query);
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  };

  const handleSearchInput = (e) => {
    performSearch(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchInputRef.current.value.length > 0) {
      performSearch(searchInputRef.current.value);
    }
  };

  const handleResultClick = (url) => {
    navigate(url);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsResultsVisible(false);
      searchInputRef.current.blur();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target) &&
        searchResultsRef.current &&
        !searchResultsRef.current.contains(e.target)
      ) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          ref={searchInputRef}
          type="text"
          id="search-input"
          placeholder="ابحث هنا..."
          className="search-input"
          onInput={handleSearchInput}
          onKeyDown={handleKeyDown}
        />
        <button className="search-icon" aria-label="Search" onClick={handleSearchClick}>
          <img src={`${import.meta.env.BASE_URL}images/header/search.png`} alt="Search" />
        </button>
      </div>
      {isResultsVisible && (
        <div ref={searchResultsRef} id="search-results" className="search-results show">
          {searchResults.length === 0 ? (
            <div className="no-results">لا توجد نتائج مطابقة</div>
          ) : (
             searchResults.map((result, index) => (
               <div
                 key={index}
                 className="search-result-item"
                 onClick={() => handleResultClick(result.url)}
               >
                 <div
                   className="search-result-title"
                   dangerouslySetInnerHTML={{ __html: highlightMatch(result.title, searchQuery) }}
                 />
                 <div
                   className="search-result-caption"
                   dangerouslySetInnerHTML={{ __html: highlightMatch(result.caption, searchQuery) }}
                 />
               </div>
             ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
