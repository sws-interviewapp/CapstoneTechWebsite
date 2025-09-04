import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Rocket, 
  Users, 
  Brain, 
  Heart, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Mail, 
  Phone, 
  Globe,
  Target,
  Zap,
  Shield,
  Award,
  TrendingUp,
  MessageSquare,
  BookOpen,
  Settings,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'story', 'services', 'approach', 'impact', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-capstone-blue rounded-full flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-capstone-blue">Capstone Tech</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'story', label: 'Our Story' },
                { id: 'services', label: 'Services' },
                { id: 'approach', label: 'Approach' },
                { id: 'impact', label: 'Impact' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-capstone-blue ${
                    activeSection === item.id ? 'text-capstone-blue' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'story', label: 'Our Story' },
                  { id: 'services', label: 'Services' },
                  { id: 'approach', label: 'Approach' },
                  { id: 'impact', label: 'Impact' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-sm font-medium text-gray-600 hover:text-capstone-blue"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary w-full mt-4"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section text-white section-padding pt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-capstone-gold text-black font-semibold">
                  Community & Career Centric AI
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  AI That Strengthens Communities While Advancing Careers
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Pioneering technology that serves both individual growth and community empowerment. 
                  Experience AI that's built for everyone, accessible to all, and driven by authentic understanding.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('services')}
                  className="bg-white text-capstone-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('story')}
                  className="btn-secondary border-white text-white hover:bg-white hover:text-capstone-blue px-8 py-3 text-lg font-semibold"
                >
                  Our Story
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-capstone-gold">98%</div>
                  <div className="text-sm text-blue-100">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-capstone-gold">5K+</div>
                  <div className="text-sm text-blue-100">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-capstone-gold">24/7</div>
                  <div className="text-sm text-blue-100">AI Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-capstone-gold rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Interview Coach</h3>
                      <p className="text-sm text-blue-100">Practice with confidence</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-capstone-gold rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Communication Training</h3>
                      <p className="text-sm text-blue-100">Mobile-first coaching</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-capstone-gold rounded-full flex items-center justify-center">
                      <Settings className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Custom AI Solutions</h3>
                      <p className="text-sm text-blue-100">Tailored for your mission</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just build AI—we build AI that serves humanity's highest aspirations, 
              where technology strengthens communities while advancing individual careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-capstone-blue rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Mission-Driven Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every algorithm reflects our values of equity, empowerment, and authentic human connection. 
                  We're not a for-profit with a social mission tacked on—we're mission-driven by design.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-capstone-blue rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Accessibility First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built from the ground up for everyone, including those using assistive technology. 
                  Accessibility isn't retrofitted—it's fundamental to how we design and develop.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-capstone-blue rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Community Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Technology that builds collective capacity rather than creating dependency. 
                  As individuals advance their careers, communities grow stronger.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="story" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-capstone-blue text-white">Our Founder's Journey</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  From Adversity to AI Leadership
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At 22, Shawn Gregoire was homeless. Not by choice, but by circumstance—one of those 
                  moments when life strips away everything you thought you could count on. Most people 
                  in that situation focus on survival. Shawn focused on transformation.
                </p>
                
                <p>
                  "When you've been at the bottom," Shawn reflects, "you understand something that can't 
                  be taught in business school or coded into an algorithm: the weight of a second chance, 
                  the power of someone believing in your potential when the world has written you off."
                </p>
                
                <p>
                  Fourteen and a half years in the Air Force taught systems thinking. A Master's in 
                  Education Leadership revealed how adults learn and grow. An Executive MBA from Brown/IE 
                  (Top 5 globally) provided business acumen. But it was the combination—understanding 
                  both individual development and organizational systems—that sparked the vision for 
                  Community & Career Centric AI.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-capstone-blue">14.5</div>
                  <div className="text-sm text-gray-600">Years Air Force</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-capstone-blue">Top 5</div>
                  <div className="text-sm text-gray-600">Global MBA Program</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-capstone-blue">
                <blockquote className="text-lg italic text-gray-700">
                  "I realized that most AI companies are building for efficiency or profit. 
                  But what if we built AI that strengthens communities while advancing individual careers? 
                  What if technology could be both economically viable and socially transformative?"
                </blockquote>
                <cite className="text-sm text-gray-500 mt-4 block">— Shawn Gregoire, Founder & CEO</cite>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">The Philosophy</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-capstone-green mt-1" />
                    <div>
                      <strong>Traditional AI asks:</strong> "How can we automate this process?"
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-capstone-blue mt-1" />
                    <div>
                      <strong>Capstone AI asks:</strong> "How can we empower this person while strengthening this community?"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four core offerings that demonstrate Community & Career Centric AI in action
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Capstone Interviewer */}
            <Card className="feature-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-capstone-blue rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Capstone Interviewer</CardTitle>
                    <CardDescription>AI-Powered Interview Coaching</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  An AI interview coach that understands the unique challenges faced by people 
                  re-entering the workforce, those with disabilities, or from underserved communities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">Safe practice environment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">Personalized feedback</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">Industry-specific questions</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Badge className="bg-capstone-green text-white">40% improvement in confidence</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Capstone Coach */}
            <Card className="feature-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-capstone-blue rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Capstone Coach</CardTitle>
                    <CardDescription>Mobile Communication Training</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Mobile-first business communication training that meets people where they are. 
                  Gamified learning that makes professional development engaging, not intimidating.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">AI role-play scenarios</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">360° feedback system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">Cultural context adaptation</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Badge className="bg-capstone-green text-white">Improvement in 30 days</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Custom Solutions */}
            <Card className="feature-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-capstone-blue rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Custom AI Solutions</CardTitle>
                    <CardDescription>Tailored Technology</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We don't believe in one-size-fits-all. Every organization has unique needs, 
                  especially those serving underserved communities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">Mission-aligned development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">Accessibility-first design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">Community-informed features</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Badge className="bg-capstone-green text-white">70% admin reduction</Badge>
                </div>
              </CardContent>
            </Card>

            {/* AI Workshops */}
            <Card className="feature-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-capstone-blue rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">AI-Centric Workshops</CardTitle>
                    <CardDescription>Knowledge That Empowers</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  From 2-hour sessions to 2-day intensives, we teach communities how to leverage 
                  AI for small business enhancement and community development.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">AI for small businesses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">Community development focus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm">Hands-on learning</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Badge className="bg-capstone-green text-white">Sustainable AI literacy</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Community & Career Centric AI isn't just a tagline—it's a methodology that guides every decision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-capstone-blue rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Community First</h3>
              <p className="text-gray-600">
                We don't study underserved communities; we come from them. 
                Authentic understanding drives authentic solutions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-capstone-blue rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Accessibility Built-In</h3>
              <p className="text-gray-600">
                Every feature designed from day one for screen readers, voice commands, 
                and assistive technology. Not retrofitted—fundamental.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-capstone-blue rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Measurable Impact</h3>
              <p className="text-gray-600">
                From individual career advancement to organizational efficiency, 
                we create value that can be tracked and verified.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-capstone-blue rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Mission Alignment</h3>
              <p className="text-gray-600">
                Every algorithm reflects our values of equity, empowerment, 
                and authentic human connection. Purpose drives profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Real Impact, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions don't just work in theory—they deliver measurable results for real people and organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold stats-number mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold stats-number mb-2">5,000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold stats-number mb-2">70%</div>
              <div className="text-gray-600">Admin Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold stats-number mb-2">40%</div>
              <div className="text-gray-600">Confidence Improvement</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-capstone-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-black" />
                </div>
                <div>
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "The AI feedback helped me land my dream job at Google! The practice sessions 
                    gave me confidence I never had before."
                  </blockquote>
                  <cite className="text-sm text-gray-500">— Sarah Chen, Software Engineer</cite>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-capstone-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div>
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "Capstone's custom AI solution reduced our application screening time by 70% 
                    while improving candidate quality. It's been transformational."
                  </blockquote>
                  <cite className="text-sm text-gray-500">— Marcus Johnson, HR Director</cite>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Transform Your Community?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how Community & Career Centric AI can serve your organization and community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're an organization looking to implement AI solutions, a community 
                  seeking workshops, or an individual ready to advance your career, we're here to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-capstone-blue" />
                  <span className="text-gray-700">shawn@capstoneinterviewer.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-capstone-blue" />
                  <span className="text-gray-700">347-749-2686</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-capstone-blue" />
                  <span className="text-gray-700">capstoneinterviewer.com</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Partnership Opportunities</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm text-gray-600">Nonprofit organizations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm text-gray-600">Government agencies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm text-gray-600">Educational institutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-capstone-green" />
                    <span className="text-sm text-gray-600">Community organizations</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Start the Conversation</CardTitle>
                <CardDescription>
                  Tell us about your organization and how we can help
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-capstone-blue focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-capstone-blue focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-capstone-blue focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-capstone-blue focus:border-transparent"
                      placeholder="Your organization name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How can we help?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-capstone-blue focus:border-transparent"
                      placeholder="Tell us about your needs and goals..."
                    ></textarea>
                  </div>
                  
                  <Button className="btn-primary w-full">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-capstone-blue rounded-full flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Capstone Tech</span>
              </div>
              <p className="text-gray-400">
                Pioneering Community & Career Centric AI that strengthens communities 
                while advancing individual careers.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Solutions</h4>
              <div className="space-y-2 text-gray-400">
                <div>Capstone Interviewer</div>
                <div>Capstone Coach</div>
                <div>Custom AI Solutions</div>
                <div>AI Workshops</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div>shawn@capstoneinterviewer.com</div>
                <div>347-749-2686</div>
                <div>capstoneinterviewer.com</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Capstone Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

