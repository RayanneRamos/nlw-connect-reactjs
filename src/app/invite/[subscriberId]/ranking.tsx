import { getRanking } from '@/http/api'
import Image from 'next/image'
import medalCooperImage from '../../../assets/medal-cooper.svg'
import medalGoldImage from '../../../assets/medal-gold.svg'
import medalSilverImage from '../../../assets/medal-silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingposition = index + 1
          return (
            <div
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
              key={item.id}
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingposition}º</span> |{' '}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>
              {rankingposition === 1 && (
                <Image
                  src={medalGoldImage}
                  alt="gold-medal"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingposition === 2 && (
                <Image
                  src={medalSilverImage}
                  alt="gold-medal"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingposition === 3 && (
                <Image
                  src={medalCooperImage}
                  alt="gold-medal"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
