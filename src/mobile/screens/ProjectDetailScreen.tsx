import React from 'react';
import { ArrowLeft, MapPin, CheckCircle2, Clock, ShieldCheck, Heart, Share2, Calendar } from 'lucide-react';
import { useMobileApp } from '../context/MobileAppContext';
import { MOBILE_PROJECTS } from '../data/mobileMockData';
import { CharityImage } from '../../components/CharityImage';

interface ProjectDetailScreenProps {
  projectId?: string;
}

export const ProjectDetailScreen: React.FC<ProjectDetailScreenProps> = ({ projectId }) => {
  const { popScreen, openDonationFlow, showToast, currency } = useMobileApp();

  const project =
    MOBILE_PROJECTS.find((p) => p.id === projectId) || MOBILE_PROJECTS[0];

  const percent = Math.min(100, Math.round((project.raisedAmount / project.targetAmount) * 100));

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      showToast('Project link copied');
    }
  };

  return (
    <div id="mobile-project-detail-screen" className="pb-36 relative bg-[#FBFBF9]">
      {/* 1. TOP APP BAR */}
      <div className="sticky top-0 z-30 bg-[#FDFCFB]/96 backdrop-blur-md border-b border-[#ECE7DC] px-3 py-2.5 flex items-center justify-between">
        <button
          type="button"
          onClick={popScreen}
          className="flex items-center gap-1 text-[#2A3830] font-semibold text-xs py-1 px-2 rounded-lg hover:bg-[#F0ECE3] cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Impact</span>
        </button>
        <span className="text-xs font-bold text-[#16241B] truncate max-w-[180px]">
          {project.title}
        </span>
        <button
          type="button"
          onClick={handleShare}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#35453C] hover:bg-[#F0ECE3] cursor-pointer"
        >
          <Share2 size={16} />
        </button>
      </div>

      {/* 2. PROJECT HERO IMAGE */}
      <div className="relative aspect-[16/10] w-full bg-[#18261E] overflow-hidden">
        <CharityImage
          src={project.imageUrl}
          fallbackUrls={project.fallbackUrls}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 text-white space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-brand-light font-medium">
            <MapPin size={13} />
            <span>{project.location}</span>
          </div>
          <h1 className="text-lg font-bold leading-tight">{project.title}</h1>
        </div>
      </div>

      {/* 3. PROGRESS & FUNDING STATUS */}
      <div className="p-4 space-y-4">
        <div className="p-4 rounded-2xl bg-[#FDFCFB] border border-[#E6E1D6] shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-[#637468] block">Raised so far</span>
              <span className="text-base font-extrabold text-brand-primary">
                {currency} {project.raisedAmount.toLocaleString()}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#637468] block">Target Goal</span>
              <span className="text-sm font-bold text-[#18261E]">
                {currency} {project.targetAmount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 rounded-full bg-[#ECE7DC] overflow-hidden">
            <div
              style={{ width: `${percent}%` }}
              className="h-full bg-brand-primary rounded-full transition-all"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-[#55665C] pt-1">
            <span>{percent}% Completed</span>
            <span>Est. Delivery: {project.completionDate}</span>
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-1.5">
          <h2 className="text-sm font-bold text-[#16251C]">Project Scope</h2>
          <p className="text-xs text-[#3E4E44] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Field Officer Note */}
        <div className="p-3.5 rounded-2xl bg-[#F3EFE7] border-l-4 border-brand-primary space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary block">
            Field Officer Dispatch · {project.fieldOfficerName}
          </span>
          <p className="text-xs text-[#2A3930] italic leading-relaxed">
            "{project.fieldOfficerNote}"
          </p>
        </div>

        {/* Milestones */}
        <section className="space-y-2.5 pt-2 border-t border-[#ECE7DC]">
          <h2 className="text-sm font-bold text-[#16251C]">Milestones & Verification</h2>
          <div className="space-y-2">
            {project.milestones.map((m, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FDFCFB] border border-[#E6E1D6]"
              >
                {m.completed ? (
                  <CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-0.5" />
                ) : (
                  <Clock size={16} className="text-[#88988C] shrink-0 mt-0.5" />
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-[#18261E]">{m.title}</h4>
                  <span className="text-[10px] text-[#6E7E73]">{m.date}</span>
                </div>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                    m.completed
                      ? 'bg-brand-light text-brand-primary'
                      : 'bg-[#EFECE6] text-[#6E7E73]'
                  }`}
                >
                  {m.completed ? 'Verified' : 'Pending'}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Field Updates */}
        <section className="space-y-2.5 pt-2 border-t border-[#ECE7DC]">
          <h2 className="text-sm font-bold text-[#16251C]">Recent Field Updates</h2>
          <div className="space-y-2">
            {project.updates.map((up, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-[#FDFCFB] border border-[#E6E1D6] space-y-1"
              >
                <div className="flex items-center gap-1.5 text-[10.5px] text-[#6A7B70]">
                  <Calendar size={11} />
                  <span>{up.date}</span>
                </div>
                <h4 className="text-xs font-bold text-[#18261E]">{up.title}</h4>
                <p className="text-xs text-[#4A5A50] leading-snug">{up.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* STICKY BOTTOM DONATE CTA (Floats cleanly above fixed bottom tab bar) */}
      <div className="fixed bottom-[62px] inset-x-0 p-3 bg-[#FDFCFB]/95 backdrop-blur-md border-t border-[#E6E1D6] z-30 shadow-[0_-4px_20px_rgba(20,35,27,0.08)]">
        <div className="max-w-md mx-auto flex items-center gap-2.5">
          <div className="flex-1">
            <span className="text-[10px] uppercase font-bold text-[#6D7D72] block">
              Remaining Gap
            </span>
            <span className="text-xs font-bold text-brand-primary">
              {currency} {(project.targetAmount - project.raisedAmount).toLocaleString()}
            </span>
          </div>
          <button
            type="button"
            onClick={() => openDonationFlow(project.causeSlug, 2500)}
            className="flex-2 min-h-[46px] rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-sm font-semibold flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <Heart size={15} fill="currentColor" />
            <span>Fund This Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};
