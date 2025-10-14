// src/pages/Projects.tsx
import React, { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { client, urlFor } from '../lib/sanity'
import { allProjectsQuery } from '../lib/queries'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type SanityImage = {
  _type: 'image'
  asset: { _ref?: string; _id?: string }
}

type Project = {
  _id: string
  title: string
  slug?: string
  category?: string
  description?: string
  heroImage?: SanityImage
  images?: SanityImage[]
  highlights?: string[]
  publishedAt?: string
  client?: string
  location?: string
  featured?: boolean
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [sliderIndexes, setSliderIndexes] = useState<number[]>([])

  const [heroRef, isHeroVisible] = useScrollAnimation({ threshold: 0.3 })
  const [projectsRef, isProjectsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [commitmentRef, isCommitmentVisible] = useScrollAnimation({ threshold: 0.2 })
  const [ctaRef, isCtaVisible] = useScrollAnimation({ threshold: 0.2 })

  useEffect(() => {
    client
      .fetch(allProjectsQuery)
      .then((res: Project[]) => {
        console.log('Sanity response:', res)
        setProjects(res || [])
        setSliderIndexes(Array((res || []).length).fill(0))
      })
      .catch((err) => console.error('Sanity fetch error:', err))
  }, [])

  const handlePrev = (index: number) => {
    setSliderIndexes((prev) => {
      const newIndexes = [...prev]
      const imgs = projects[index]?.images || []
      const len = imgs.length || 1
      newIndexes[index] = (newIndexes[index] - 1 + len) % len
      return newIndexes
    })
  }

  const handleNext = (index: number) => {
    setSliderIndexes((prev) => {
      const newIndexes = [...prev]
      const imgs = projects[index]?.images || []
      const len = imgs.length || 1
      newIndexes[index] = (newIndexes[index] + 1) % len
      return newIndexes
    })
  }

  const getImageUrl = (image?: SanityImage, width = 1200, height = 800) =>
    image ? urlFor(image).width(width).height(height).auto('format').url() : '/placeholder.jpg'

  return (
    <div className="bg-white">
      {/* ---------------- HERO SECTION ---------------- */}
      <section
        ref={heroRef}
        className={`relative py-20 overflow-hidden text-white bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 scroll-fade-in ${
          isHeroVisible ? 'visible' : 'scroll-initial-visible'
        }`}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-80"
          style={{
            backgroundImage: `url("${
              projects?.[0]?.heroImage
                ? getImageUrl(projects[0].heroImage, 1600, 900)
                : 'https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Images/ehmitrich-fW6lwDM26o0-unsplash.jpg?updatedAt=1759711298389'
            }")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 via-blue-600/50 to-purple-600/50"></div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Projects</h1>
          <p className="max-w-3xl mx-auto text-xl text-green-100">
            Delivering excellence across electrical engineering, power electronics, and industrial automation projects
          </p>
        </div>
      </section>

      {/* ---------------- PROJECTS SECTION ---------------- */}
      <section
        ref={projectsRef}
        className={`py-20 scroll-fade-in ${isProjectsVisible ? 'visible' : ''}`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              A showcase of our recent work across various sectors and industries
            </p>
          </div>

          <div className="space-y-12">
            {projects.length === 0 ? (
              <p className="text-center text-gray-500">
                No projects published yet. Add some from Sanity Studio.
              </p>
            ) : (
              projects.map((project, index) => (
                <div
                  key={project._id}
                  className={`overflow-hidden transition-shadow bg-white shadow-xl rounded-2xl scroll-hover scroll-fade-in scroll-delay-${
                    (index + 1) * 200
                  } ${isProjectsVisible ? 'visible' : ''}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image Slider */}
                    <div className="relative flex flex-col items-center justify-center w-full bg-gray-100 h-80 lg:h-full">
                      {(() => {
                        const imgs =
                          project.images && project.images.length
                            ? project.images
                            : project.heroImage
                            ? [project.heroImage]
                            : []
                        const imgIndex = sliderIndexes[index] ?? 0
                        const imageObj = imgs[imgIndex] || imgs[0]
                        const src = getImageUrl(imageObj, 1200, 800)
                        return (
                          <img
                            src={src}
                            alt={project.title}
                            className="object-cover w-full h-full transition-all duration-500 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                          />
                        )
                      })()}

                      {(project.images && project.images.length > 1) && (
                        <div className="absolute inset-x-0 flex justify-center gap-2 bottom-4">
                          <button
                            onClick={() => handlePrev(index)}
                            className="p-2 text-gray-700 rounded-full shadow bg-white/80 hover:bg-white"
                            aria-label="Previous image"
                          >
                            ←
                          </button>
                          <button
                            onClick={() => handleNext(index)}
                            className="p-2 text-gray-700 rounded-full shadow bg-white/80 hover:bg-white"
                            aria-label="Next image"
                          >
                            →
                          </button>
                        </div>
                      )}

                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 text-sm font-semibold text-gray-800 bg-white rounded-full shadow-lg">
                          {project.category ?? 'Uncategorized'}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8">
                      <h3 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mb-6 leading-relaxed text-gray-700">{project.description}</p>

                      <div>
                        <h4 className="mb-3 text-lg font-semibold text-gray-800">
                          Project Highlights
                        </h4>
                        <div className="space-y-2">
                          {(project.highlights && project.highlights.length) ? (
                            project.highlights.map((highlight, hIndex) => (
                              <div key={hIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700">{highlight}</p>
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-600">No highlights set.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ---------------- OUR COMMITMENT SECTION ---------------- */}
      <section
        ref={commitmentRef}
        className={`py-20 text-white bg-gradient-to-r from-blue-600 to-green-600 scroll-fade-in ${
          isCommitmentVisible ? 'visible' : ''
        }`}
      >
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Commitment to Excellence</h2>
          <p className="max-w-4xl mx-auto mb-8 text-xl text-blue-100">
            Every project we undertake reflects our dedication to quality, safety, and client
            satisfaction. With our experienced team and comprehensive approach, we deliver results
            that exceed expectations.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
            {[
              { title: 'Quality First', description: 'Highest standards in every aspect of our work' },
              { title: 'On Time, On Budget', description: 'Reliable delivery that respects your timeline and budget' },
              { title: 'Safety Excellence', description: 'Zero-incident safety record across all projects' },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 bg-white/10 backdrop-blur-sm rounded-xl scroll-scale-in scroll-delay-${
                  (index + 1) * 200
                } ${isCommitmentVisible ? 'visible' : ''}`}
              >
                <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-2xl font-bold text-yellow-300">SUCCESS IS CONSTANCY OF PURPOSE</p>
          </div>
        </div>
      </section>

      {/* ---------------- CALL TO ACTION SECTION ---------------- */}
      <section
        ref={ctaRef}
        className={`py-20 bg-gray-50 scroll-fade-in ${isCtaVisible ? 'visible' : ''}`}
      >
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Let's discuss how we can bring your electrical engineering and instrumentation project
            to life with the same excellence and dedication.
          </p>
        </div>
      </section>
    </div>
  )
}
