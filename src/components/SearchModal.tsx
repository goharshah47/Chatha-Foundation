import React, { useState } from 'react';
import { Search, X, ArrowRight, HeartHandshake, Droplets, Utensils, Users, Home } from 'lucide-react';
import { CauseId } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCause: (causeId: CauseId) => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: string;
  description: string;
  causeId: CauseId;
  badge?: string;
}

const SEARCH_CATALOG: SearchItem[] = [
  {
    id: 'sudan',
    title: 'Sudan Emergency Appeal',
    category: 'Appeals',
    description: 'Urgent emergency food, safe clean water, and mobile trauma medical kits for displaced families.',
    causeId: 'where-needed',
    badge: 'Urgent'
  },
  {
    id: 'gaza',
    title: 'Gaza Emergency Relief',
    category: 'Appeals',
    description: 'Hot meals, clean water trucking, and medical aid distributed daily on the ground.',
    causeId: 'where-needed',
    badge: 'Critical'
  },
  {
    id: 'water-borehole',
    title: 'Clean Water & Solar Boreholes',
    category: 'Causes',
    description: 'Solar-powered community wells providing thousands with daily disease-free drinking water.',
    causeId: 'water'
  },
  {
    id: 'food-parcels',
    title: 'Food Baskets & Hot Meals',
    category: 'Causes',
    description: 'Life-saving family food parcels and warm emergency meals in famine-affected corridors.',
    causeId: 'food'
  },
  {
    id: 'orphan-sponsorship',
    title: 'Orphan Care & School Sponsorship',
    category: 'Causes',
    description: 'Comprehensive monthly care providing schooling, balanced nutrition, healthcare, and safe shelter.',
    causeId: 'orphans'
  },
  {
    id: 'family-shelter',
    title: 'Family Emergency Shelter & Relief',
    category: 'Causes',
    description: 'Weather-resistant tents, winter insulation blankets, and livelihood starter kits for displaced families.',
    causeId: 'family'
  },
  {
    id: 'zakat',
    title: '100% Zakat Policy & Distribution',
    category: 'Religious Giving',
    description: 'Every penny of your Zakat reaches eligible families directly without administrative deductions.',
    causeId: 'where-needed'
  },
  {
    id: 'ramadan-iftar',
    title: 'Ramadan Giving & Sunset Iftars',
    category: 'Religious Giving',
    description: 'Delivering warm sunset meals and whole-month pantry baskets during the holy month.',
    causeId: 'ramadan'
  }
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectCause }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredItems = query.trim() === ''
    ? SEARCH_CATALOG.slice(0, 5)
    : SEARCH_CATALOG.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#FDFCFB] border border-[#E8E4DA] shadow-[0_24px_64px_rgba(0,0,0,0.18)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Search Humanitarian Appeals & Causes"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-[#EFEBE3] gap-3">
          <Search size={20} className="text-brand-primary shrink-0" />
          <input
            type="text"
            placeholder="Search appeals, water projects, orphan care, Zakat..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-[#18261E] text-base placeholder-[#8D9A91] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#8C9A90] hover:text-[#18261E] px-2 py-1 rounded bg-[#EFECE5]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#65756C] hover:text-[#18261E] hover:bg-[#EFECE5] transition-colors"
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-6 py-3 bg-[#F8F6F1] border-b border-[#ECE7DE] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#7A887E] font-medium shrink-0">Popular:</span>
          {['Clean Water', 'Sudan', 'Orphan Care', 'Gaza', 'Food Aid', '100% Zakat'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-[#EAE6DD] text-[#334238] hover:bg-brand-primary hover:text-white transition-colors cursor-pointer shrink-0 font-medium"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-4 space-y-2">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10 text-sm text-[#738278]">
              No appeals found matching "{query}". You can still make a general donation.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectCause(item.causeId);
                  onClose();
                }}
                className="group flex items-start justify-between p-3.5 rounded-xl hover:bg-[#F3EFE8] transition-colors cursor-pointer border border-transparent hover:border-[#E5DFD4]"
              >
                <div className="pr-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold tracking-wider text-brand-primary uppercase">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#DC2626]/10 text-[#DC2626]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-[14px] font-semibold text-[#18261E] group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5D6D63] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <button
                  className="shrink-0 mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-primary text-white text-xs font-semibold hover:bg-brand-hover transition-all"
                >
                  <span>Donate</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#F8F6F1] border-t border-[#ECE7DE] text-[11px] text-[#78887E] flex items-center justify-between">
          <span>Chatha Foundation · Registered Charity No. 1198242</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
