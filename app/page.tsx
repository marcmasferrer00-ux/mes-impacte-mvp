'use client'
import React from 'react'
import { Check, ArrowRight, PhoneCall, Mail, MapPin, Megaphone, PenTool, BarChart3, Sparkles } from 'lucide-react'

function Container({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

function Button({ children, href = '#', variant = 'primary' }: { children: React.ReactNode, href?: string, variant?: 'primary' | 'ghost' }) {
  const base = 'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2'
  const styles = variant === 'primary'
    ? 'bg-black text-white hover:opacity-90 focus:ring-black'
    : 'bg-white text-black border border-black hover:bg-neutral-50 focus:ring-neutral-400'
  return <a className={`${base} ${styles}`} href={href}>{children}</a>
}

function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`rounded-2xl border border-black/10 bg-white p-6 shadow-sm ${className}`}>{children}</div>
}

export default function Page() {
  return (
    <div className='min-h-screen scroll-smooth bg-white text-black'>
      <header className='sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur'>
        <Container className='flex h-16 items-center justify-between'>
          <a href='#' className='flex items-center gap-3'>
            <img src='/logo.png' alt='Més Impacte' className='h-9 w-9 object-contain' />
            <span className='text-sm font-semibold tracking-wide'>Més Impacte</span>
          </a>
          <nav className='hidden gap-6 text-sm font-medium md:flex'>
            <a href='#serveis' className='hover:opacity-80'>Serveis</a>
            <a href='#metode' className='hover:opacity-80'>Mètode</a>
            <a href='#plans' className='hover:opacity-80'>Plans</a>
            <a href='#contacte' className='hover:opacity-80'>Contacte</a>
          </nav>
          <div className='hidden md:block'>
            <Button href='#contacte'>Parlem</Button>
          </div>
        </Container>
      </header>

      <section className='border-b border-black/10'>
        <Container className='grid items-center gap-8 py-16 md:grid-cols-2 md:py-24'>
          <div>
            <div className='inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-xs'>Gestó de xarxes socials · Contingut · Ads</div>
            <h1 className='mt-4 text-4xl font-extrabold leading-tight md:text-5xl'>
              Més Impacte a les teves <span className='underline underline-offset-4 decoration-black'>xarxes socials</span>
            </h1>
            <p className='mt-4 max-w-xl text-neutral-700'>
              Estratègia, calendari editorial i producció de contingut (reels, carrusels, stories), community i Social Ads.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Button href='#contacte'>Vull començar <ArrowRight className='ml-2 h-4 w-4'/></Button>
              <Button href='#serveis' variant='ghost'>Veure serveis</Button>
            </div>
            <ul className='mt-6 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2'>
              {['Lliurament ràpid del MVP','Contingut orientat a conversió','Community + Ads','Disseny net i ràpid'].map((t)=> (
                <li key={t} className='flex items-center gap-2'><Check className='h-4 w-4'/> {t}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className='relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm'>
              <div className='absolute inset-0 grid place-items-center text-neutral-400 text-sm'>Previsualització</div>
            </div>
          </div>
        </Container>
      </section>

      <section id='serveis' className='py-16 md:py-24'>
        <Container>
          <h2 className='text-2xl font-bold md:text-3xl'>Serveis</h2>
          <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {[{
              icon: Megaphone, title: 'Gestió de xarxes (SMM)', desc: 'Planificació, calendari i publicació a IG, TikTok, LinkedIn i Facebook.'
            },{
              icon: PenTool, title: 'Content factory', desc: 'Reels, carrusels, stories i copies persuasives.'
            },{
              icon: Sparkles, title: 'Community management', desc: 'Resposta a comentaris i MD, dinamització i activacions.'
            },{
              icon: BarChart3, title: 'Social Ads', desc: 'Campanyes Meta/TikTok orientades a creixement i conversió.'
            }].map((s)=> (
              <Card key={s.title}>
                <div className='flex items-start gap-3'>
                  <div className='rounded-xl border border-black/10 bg-white p-2'><s.icon className='h-5 w-5'/></div>
                  <div>
                    <h3 className='font-semibold'>{s.title}</h3>
                    <p className='mt-1 text-sm text-neutral-700'>{s.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id='metode' className='border-t border-b border-black/10 bg-white py-16 md:py-24'>
        <Container>
          <h2 className='text-2xl font-bold md:text-3xl'>Mètode en 4 passes</h2>
          <ol className='mt-6 space-y-4'>
            {['Diagnosi i objectius','Disseny del calendari i creativitats','Posada en marxa (SMM + Ads)','Mesura i iteració mensual'].map((step, i)=> (
              <li key={i} className='flex gap-4'>
                <div className='mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white text-sm font-bold'>{i+1}</div>
                <div>
                  <div className='font-semibold'>{step}</div>
                  <p className='text-sm text-neutral-700'>Treball àgil i enfoc en resultats.</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id='plans' className='py-16 md:py-24'>
        <Container>
          <h2 className='text-2xl font-bold md:text-3xl'>Plans i preus</h2>
          <div className='mt-8 grid gap-6 md:grid-cols-3'>
            {[{
              name: 'Social Starter', price: '349€ / mes', points: ['12 posts/mes','Stories setmanals','Resposta bàsica','Informe mensual'], cta: 'Demana info'
            },{
              name: 'Social Pro', price: '649€ / mes', points: ['16-20 posts','UGC trimestral','Community 1h/dia','Ads bàsic'], cta: 'Parlem'
            },{
              name: 'Social Growth', price: '1.100€ / mes', points: ['Calendari 360º','4-6 reels/setmana','Community 2h/dia','Ads complet'], cta: 'Vull créixer'
            }].map((p, idx)=> (
              <Card key={p.name} className={idx===2?'ring-1 ring-black':''}>
                <div className='flex items-baseline justify-between'>
                  <h3 className='text-lg font-semibold'>{p.name}</h3>
                  <span className='text-sm text-neutral-500'>Factura mensual</span>
                </div>
                <div className='mt-2 text-3xl font-extrabold'>{p.price}</div>
                <ul className='mt-4 space-y-2 text-sm text-neutral-700'>
                  {p.points.map((pt)=> <li key={pt} className='flex items-center gap-2'><Check className='h-4 w-4'/> {pt}</li>)}
                </ul>
                <div className='mt-6'><Button href='#contacte' variant={idx===2?'primary':'ghost'}>{p.cta}</Button></div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id='contacte' className='border-t border-black/10 py-16 md:py-24'>
        <Container>
          <div className='grid gap-8 md:grid-cols-2'>
            <div>
              <h2 className='text-2xl font-bold md:text-3xl'>Parlem del teu projecte</h2>
              <p className='mt-2 max-w-prose text-neutral-700'>Explica'ns en 2 minuts què necessites i et proposem ruta i pressupost.</p>
              <div className='mt-6 space-y-3 text-sm text-neutral-800'>
                <div className='flex items-center gap-2'><PhoneCall className='h-4 w-4'/> +34 600 000 000</div>
                <div className='flex items-center gap-2'><Mail className='h-4 w-4'/> hola@mesimpacte.cat</div>
                <div className='flex items-center gap-2'><MapPin className='h-4 w-4'/> Santa Maria de Palautordera · Catalunya</div>
              </div>
            </div>
            <Card>
              <form className='space-y-4' onSubmit={(e)=>{e.preventDefault(); alert('Gràcies! Ens posarem en contacte ben aviat.');}}>
                <div>
                  <label className='mb-1 block text-sm font-medium'>Nom</label>
                  <input required className='w-full rounded-xl border border-black/20 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black' placeholder='El teu nom'/>
                </div>
                <div>
                  <label className='mb-1 block text-sm font-medium'>Email</label>
                  <input type='email' required className='w-full rounded-xl border border-black/20 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black' placeholder='tu@correu.com'/>
                </div>
                <div>
                  <label className='mb-1 block text-sm font-medium'>Missatge</label>
                  <textarea rows={4} className='w-full rounded-xl border border-black/20 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black' placeholder="Explica'ns què necessites"/>
                </div>
                <Button href='#' variant='primary'>Enviar</Button>
              </form>
            </Card>
          </div>
        </Container>
      </section>

      <footer className='border-t border-black/10 py-10 text-sm text-neutral-600'>
        <Container>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <div>© {new Date().getFullYear()} Més Impacte</div>
            <div className='flex items-center gap-6'>
              <a href='#' className='hover:opacity-80'>Avís legal</a>
              <a href='#' className='hover:opacity-80'>Privacitat</a>
              <a href='#' className='hover:opacity-80'>Cookies</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
