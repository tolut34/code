import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiTarget, FiTrendingUp, FiShield, FiArrowRight, FiPlay, FiStar, FiAward, FiGlobe } = FiIcons;

const Home = () => {
  const programs = [
    {
      title: 'Youth Mentorship',
      description: 'Empowering young leaders through mentorship and workshops for tomorrow\'s integrity champions.',
      icon: FiUsers,
      color: 'bg-accent'
    },
    {
      title: 'Community Campaigns',
      description: 'Local projects promoting accountability, transparency, and civic pride in communities.',
      icon: FiTarget,
      color: 'bg-primary'
    },
    {
      title: 'Policy Advocacy',
      description: 'Research-driven engagement with stakeholders to create systemic change and reform.',
      icon: FiTrendingUp,
      color: 'bg-accent'
    },
    {
      title: 'Monitoring & Reporting',
      description: 'Tools and platforms for citizens to report issues and ensure proper follow-up.',
      icon: FiShield,
      color: 'bg-primary'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Citizens Engaged' },
    { number: '50+', label: 'Communities Reached' },
    { number: '100+', label: 'Leaders Trained' },
    { number: '25+', label: 'Policy Changes' }
  ];

  const floatingElements = [
    { icon: FiStar, delay: 0, x: 20, y: -20 },
    { icon: FiAward, delay: 0.5, x: -30, y: 30 },
    { icon: FiGlobe, delay: 1, x: 40, y: 20 },
    { icon: FiTarget, delay: 1.5, x: -20, y: -30 }
  ];

  const images = [
    {
      src: "/Do-right-awarenss-initiative-school-project-6-scaled-2 (1).jpg",
      alt: "DoRight awareness initiative"
    },
    {
      src: "/Do-right-awarenss-initiative-school-project-6-scaled-2.jpg",
      alt: "DoRight school project"
    },
    {
      src: "/project-6b.jpg",
      alt: "Project 6b"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full overflow-x-hidden"
    >
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-neutral-800 to-black text-white py-16 sm:py-20 lg:py-24 w-full overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
          />
          
          {/* Floating geometric shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-32 h-32 border border-accent/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-white/10 rotate-45"
          />
          
          {/* Floating icons */}
          {floatingElements.map((element, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, element.y, 0],
                x: [0, element.x, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut"
              }}
              className="absolute hidden lg:block"
              style={{
                top: `${20 + index * 15}%`,
                right: `${10 + index * 20}%`
              }}
            >
              <SafeIcon icon={element.icon} className="w-8 h-8 text-accent/30" />
            </motion.div>
          ))}
        </div>

        <div className="relative w-full max-w-container mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <SafeIcon icon={FiStar} className="w-4 h-4 mr-2 text-accent" />
                <span className="text-sm font-medium">Nigeria's Leading Integrity Initiative</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-6 leading-tight"
              >
                Building a Nigeria That{' '}
                <motion.span
                  animate={{ color: ['#FFD700', '#FFFFFF', '#FFD700'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative"
                >
                  Does Right
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-0 left-0 h-1 bg-accent rounded-full"
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl lg:text-2xl mb-8 text-neutral-300 max-w-2xl leading-relaxed"
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Empower.
                </motion.span>{' '}
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  Educate.
                </motion.span>{' '}
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  Transform.
                </motion.span>{' '}
                Join the movement to promote integrity, accountability, and civic responsibility across communities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/join"
                    className="bg-accent text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    Join The Movement
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/training"
                    className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                  >
                    <SafeIcon icon={FiPlay} className="mr-2 w-5 h-5" />
                    Start Training
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-neutral-400"
              >
                <div className="flex items-center">
                  <SafeIcon icon={FiUsers} className="w-4 h-4 mr-2" />
                  <span>5,000+ Active Members</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiAward} className="w-4 h-4 mr-2" />
                  <span>Certified Training Programs</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-96"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-success w-12 h-12 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-black">98%</div>
                      <div className="text-sm text-neutral-600">Success Rate</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating achievement badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute -top-4 -right-4 bg-accent text-black rounded-full p-3 shadow-lg"
                >
                  <SafeIcon icon={FiAward} className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 sm:py-20 bg-white w-full relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          className="absolute inset-0 bg-gradient-to-r from-black/5 to-accent/5"
        />
        
        <div className="relative w-full max-w-container mx-auto px-4 sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4">
              Our Growing Impact
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real numbers, real change across Nigeria
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
                  className="bg-gradient-to-br from-accent to-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-black" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-neutral-700 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-neutral-50 to-neutral-100 w-full relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 border border-black/10 rounded-full"
          />
        </div>

        <div className="relative w-full max-w-container mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center bg-accent/20 rounded-full px-4 py-2 mb-6"
              >
                <SafeIcon icon={FiUsers} className="w-5 h-5 mr-2 text-black" />
                <span className="text-black font-semibold">About DoRight</span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-black mb-6">
                Who We Are
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  DoRight is a non-profit movement championing integrity, accountability, and civic responsibility across Nigeria. Through public campaigns, comprehensive training programs, and community-led action, we're building a culture where doing the right thing is the norm, not the exception.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Our approach combines grassroots mobilization with evidence-based advocacy, creating sustainable change from the ground up while engaging with policy makers and institutions at the highest levels.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link
                  to="/programs"
                  className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-neutral-800 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
                >
                  Learn More About Our Work
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="DoRight team members in action"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-accent rounded-full opacity-80 hidden lg:block"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-black/20 rounded-full hidden lg:block"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Programs Section */}
      <section className="py-16 sm:py-24 bg-white w-full">
        <div className="w-full max-w-container mx-auto px-4 sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-black mx-auto mb-6 rounded-full"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-black mb-6">
              Our Programs
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive initiatives designed to create lasting change through education, advocacy, and community engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-200"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`${program.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <SafeIcon icon={program.icon} className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-black mb-4">
                  {program.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  {program.description}
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-black font-semibold inline-flex items-center cursor-pointer"
                >
                  Learn More
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Training Promo Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-black via-neutral-800 to-neutral-900 w-full relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        />

        <div className="relative w-full max-w-container mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <SafeIcon icon={FiPlay} className="w-5 h-5 mr-2 text-accent" />
                <span className="text-accent font-semibold">Online Learning</span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-6">
                Learn Doing Right — Online Courses & Certification
              </h2>
              
              <p className="text-lg sm:text-xl mb-8 text-neutral-300 leading-relaxed">
                Enroll in our comprehensive step-by-step video courses. Complete lessons, pass assessments, earn verified certificates, and unlock advanced training modules in integrity and leadership.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/training"
                    className="bg-accent text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 inline-flex items-center justify-center shadow-lg"
                  >
                    Browse Courses
                    <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/training/dashboard"
                    className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                  >
                    Training Dashboard
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Person taking online training course"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                
                {/* Play button overlay */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white/90 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                    <SafeIcon icon={FiPlay} className="w-8 h-8 text-black ml-1" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-neutral-100 via-white to-neutral-50 text-black w-full relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-2 h-2 bg-accent/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
              }}
            />
          ))}
        </div>

        <div className="relative w-full max-w-container mx-auto px-4 sm:px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-accent/20 rounded-full px-6 py-3 mb-8"
            >
              <SafeIcon icon={FiTarget} className="w-5 h-5 mr-2 text-black" />
              <span className="text-black font-semibold">Join the Movement</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-6">
              Take Action Today
            </h2>
            
            <p className="text-lg sm:text-xl text-neutral-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of Nigerians committed to building a more transparent, accountable, and integrity-driven society. Every action counts toward creating the Nigeria we all deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/join"
                  className="bg-accent text-black px-10 py-5 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 inline-flex items-center justify-center shadow-lg text-lg"
                >
                  Donate Now
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-6 h-6" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/join"
                  className="border-2 border-black text-black px-10 py-5 rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center text-lg"
                >
                  Volunteer
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;