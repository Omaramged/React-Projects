import { Code2, MousePointerClick, User, Heart, Clock, Cloud } from 'lucide-react'

const icons = {
  code: Code2,
  pointer: MousePointerClick,
  person: User,
  heart: Heart,
  clock: Clock,
  cloud: Cloud,
}

function FeatureCard({ title, description, iconType }) {
  const Icon = icons[iconType]

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover-lift flex flex-col items-center text-center">
      <div className="mb-4">
        {Icon && <Icon className="w-7 h-7 text-teal-500" strokeWidth={1.5} />}
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}

export default FeatureCard
