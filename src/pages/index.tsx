import { CallToActionSection } from '@/components/call-to-action-section'
import { CustomerStorySection } from '@/components/customer-story-section'
import { FeatureSection } from '@/components/feature-section'
import { HeroSection } from '@/components/hero-section'
import { SupportSection } from '@/components/support-section'

export default function Home() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToActionSection />
    </article>
  )
}
