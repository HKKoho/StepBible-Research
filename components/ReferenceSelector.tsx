
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BIBLE_BOOKS } from '../constants';
import { BibleReference } from '../types';

interface ReferenceSelectorProps {
  onReferenceChange: (reference: BibleReference) => void;
}

export const ReferenceSelector: React.FC<ReferenceSelectorProps> = ({ onReferenceChange }) => {
  const { t } = useTranslation();
  const [book, setBook] = useState('Genesis');
  const [chapter, setChapter] = useState('1');
  const [verse, setVerse] = useState('1');

  const handleBookChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newBook = e.target.value;
    setBook(newBook);
    onReferenceChange({ book: newBook, chapter, verse });
  };

  const handleChapterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChapter = e.target.value;
    setChapter(newChapter);
    onReferenceChange({ book, chapter: newChapter, verse });
  };

  const handleVerseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVerse = e.target.value;
    setVerse(newVerse);
    onReferenceChange({ book, chapter, verse: newVerse });
  };
  
  const allBooks = [...BIBLE_BOOKS['Old Testament'], ...BIBLE_BOOKS['New Testament']];

  return (
    <div className="card">
      <h2>{t('reference_selector_title')}</h2>
      <div className="reference-inputs">
        <div>
          <label htmlFor="book">{t('book')}</label>
          <select id="book" value={book} onChange={handleBookChange}>
            {allBooks.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="chapter">{t('chapter')}</label>
          <input id="chapter" type="number" value={chapter} onChange={handleChapterChange} min="1" />
        </div>
        <div>
          <label htmlFor="verse">{t('verse')}</label>
          <input id="verse" type="number" value={verse} onChange={handleVerseChange} min="1" />
        </div>
      </div>
    </div>
  );
};
