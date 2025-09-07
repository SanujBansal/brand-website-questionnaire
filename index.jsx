import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Eye, Palette, Type, Target, Lightbulb } from 'lucide-react';

const BrandQuestionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const getRecommendations = () => {
    const recs = {
      colorPalette: [],
      typography: [],
      visualStyle: [],
      messaging: [],
      layout: [],
      features: []
    };

    // Color recommendations based on emotion and industry
    if (answers.emotion === 'trust') {
      recs.colorPalette = ['Deep blues (#1e3a8a)', 'Professional grays (#6b7280)', 'Clean whites'];
    } else if (answers.emotion === 'excitement') {
      recs.colorPalette = ['Vibrant oranges (#ea580c)', 'Energetic reds (#dc2626)', 'Bold yellows (#eab308)'];
    } else if (answers.emotion === 'luxury') {
      recs.colorPalette = ['Rich blacks (#000000)', 'Gold accents (#d4af37)', 'Deep purples (#6b21a8)'];
    } else if (answers.emotion === 'innovation') {
      recs.colorPalette = ['Electric blues (#2563eb)', 'Tech greens (#059669)', 'Modern grays (#374151)'];
    }

    // Typography based on personality and industry
    if (answers.personality === 'professional') {
      recs.typography = ['Primary: Clean Sans-serif (Inter, Roboto)', 'Secondary: Traditional Serif for headings'];
    } else if (answers.personality === 'creative') {
      recs.typography = ['Primary: Modern Display font', 'Secondary: Playful Sans-serif'];
    } else if (answers.personality === 'luxury') {
      recs.typography = ['Primary: Elegant Serif (Playfair, Cormorant)', 'Secondary: Refined Sans-serif'];
    }

    // Visual style based on theme and industry
    if (answers.theme === 'modern-dark') {
      recs.visualStyle = ['Dark backgrounds with light text', 'Gradient overlays', 'Geometric shapes', 'Minimal shadows'];
    } else if (answers.theme === 'modern-light') {
      recs.visualStyle = ['Clean white backgrounds', 'Subtle shadows', 'Plenty of white space', 'Soft rounded corners'];
    } else if (answers.theme === 'premium') {
      recs.visualStyle = ['High-contrast imagery', 'Sophisticated layouts', 'Minimal but impactful elements'];
    }

    // Messaging based on value proposition
    if (answers.valueProposition === 'make-money') {
      recs.messaging = ['ROI-focused headlines', 'Profit/revenue metrics', 'Success case studies', 'Before/after comparisons'];
    } else if (answers.valueProposition === 'save-time') {
      recs.messaging = ['Efficiency-focused copy', 'Time-saving benefits', 'Process streamlining', 'Automation highlights'];
    } else if (answers.valueProposition === 'build-brand') {
      recs.messaging = ['Authority positioning', 'Credibility indicators', 'Expert testimonials', 'Industry recognition'];
    }

    // Layout recommendations based on target audience
    if (answers.targetAge === '18-25') {
      recs.layout = ['Mobile-first design', 'Video backgrounds', 'Social media integration', 'Quick loading animations'];
    } else if (answers.targetAge === '26-40') {
      recs.layout = ['Balance of mobile/desktop', 'Professional imagery', 'Clear navigation', 'Conversion-focused CTAs'];
    } else if (answers.targetAge === '40+') {
      recs.layout = ['Larger text sizes', 'Simple navigation', 'Desktop-optimized', 'Clear value propositions'];
    }

    // Features based on business type and goals
    if (answers.businessType === 'service') {
      recs.features = ['Portfolio/case studies section', 'Client testimonials', 'Service packages pricing', 'Contact forms'];
    } else if (answers.businessType === 'ecommerce') {
      recs.features = ['Product catalogs', 'Shopping cart', 'Customer reviews', 'Shipping information'];
    } else if (answers.businessType === 'saas') {
      recs.features = ['Feature demonstrations', 'Pricing tiers', 'Free trial CTAs', 'Integration showcases'];
    }

    return recs;
  };

  const questions = [
    {
      section: 'Business Foundation',
      icon: <Target className="w-5 h-5" />,
      questions: [
        {
          id: 'businessType',
          label: 'What type of business are you?',
          type: 'select',
          options: [
            { value: 'service', label: 'Service Provider (Agency, Consultant, Freelancer)' },
            { value: 'ecommerce', label: 'E-commerce (Selling Products)' },
            { value: 'saas', label: 'Software/SaaS' },
            { value: 'local', label: 'Local Business (Restaurant, Clinic, etc.)' },
            { value: 'nonprofit', label: 'Non-profit/Cause' },
            { value: 'personal', label: 'Personal Brand/Influencer' }
          ]
        },
        {
          id: 'valueProposition',
          label: 'Primary way you help customers:',
          type: 'select',
          options: [
            { value: 'make-money', label: 'Make money/increase revenue' },
            { value: 'save-time', label: 'Save time/increase efficiency' },
            { value: 'build-brand', label: 'Build brand/reputation' },
            { value: 'luxury', label: 'Provide luxury/premium experience' },
            { value: 'solve-problems', label: 'Solve technical problems' },
            { value: 'education', label: 'Educate/teach skills' },
            { value: 'entertainment', label: 'Entertain/inspire' }
          ]
        }
      ]
    },
    {
      section: 'Target Audience',
      icon: <Target className="w-5 h-5" />,
      questions: [
        {
          id: 'targetAge',
          label: 'Primary customer age range:',
          type: 'select',
          options: [
            { value: '18-25', label: '18-25 (Gen Z)' },
            { value: '26-40', label: '26-40 (Millennials)' },
            { value: '40-55', label: '40-55 (Gen X)' },
            { value: '55+', label: '55+ (Boomers)' },
            { value: 'mixed', label: 'Mixed/All ages' }
          ]
        },
        {
          id: 'customerIncome',
          label: 'Target customer income level:',
          type: 'select',
          options: [
            { value: 'budget', label: 'Budget-conscious ($20k-40k)' },
            { value: 'middle', label: 'Middle-income ($40k-80k)' },
            { value: 'upper-middle', label: 'Upper-middle ($80k-150k)' },
            { value: 'high', label: 'High-income ($150k+)' },
            { value: 'business', label: 'Business/B2B clients' }
          ]
        }
      ]
    },
    {
      section: 'Brand Emotion & Personality',
      icon: <Eye className="w-5 h-5" />,
      questions: [
        {
          id: 'emotion',
          label: 'Primary emotion your brand should trigger:',
          type: 'select',
          options: [
            { value: 'trust', label: 'Trust & Reliability' },
            { value: 'excitement', label: 'Excitement & Energy' },
            { value: 'luxury', label: 'Luxury & Premium' },
            { value: 'innovation', label: 'Innovation & Tech-forward' },
            { value: 'warmth', label: 'Warmth & Approachability' },
            { value: 'authority', label: 'Authority & Expertise' },
            { value: 'creativity', label: 'Creativity & Inspiration' }
          ]
        },
        {
          id: 'personality',
          label: 'Brand personality:',
          type: 'select',
          options: [
            { value: 'professional', label: 'Professional & Corporate' },
            { value: 'friendly', label: 'Friendly & Approachable' },
            { value: 'luxury', label: 'Sophisticated & Premium' },
            { value: 'creative', label: 'Creative & Artistic' },
            { value: 'tech', label: 'Tech-savvy & Modern' },
            { value: 'traditional', label: 'Traditional & Established' },
            { value: 'edgy', label: 'Edgy & Bold' }
          ]
        }
      ]
    },
    {
      section: 'Visual Style',
      icon: <Palette className="w-5 h-5" />,
      questions: [
        {
          id: 'theme',
          label: 'Visual theme preference:',
          type: 'select',
          options: [
            { value: 'modern-light', label: 'Modern & Light' },
            { value: 'modern-dark', label: 'Modern & Dark' },
            { value: 'premium', label: 'Premium & Sophisticated' },
            { value: 'creative', label: 'Creative & Artistic' },
            { value: 'minimal', label: 'Minimal & Clean' },
            { value: 'bold', label: 'Bold & Vibrant' },
            { value: 'traditional', label: 'Traditional & Classic' }
          ]
        },
        {
          id: 'colorAvoid',
          label: 'Colors to avoid:',
          type: 'multiselect',
          options: [
            { value: 'red', label: 'Red' },
            { value: 'orange', label: 'Orange' },
            { value: 'yellow', label: 'Yellow' },
            { value: 'green', label: 'Green' },
            { value: 'blue', label: 'Blue' },
            { value: 'purple', label: 'Purple' },
            { value: 'pink', label: 'Pink' },
            { value: 'brown', label: 'Brown' }
          ]
        }
      ]
    },
    {
      section: 'Typography & Communication',
      icon: <Type className="w-5 h-5" />,
      questions: [
        {
          id: 'fontStyle',
          label: 'Font style preference:',
          type: 'select',
          options: [
            { value: 'modern-sans', label: 'Modern Sans-serif (Clean, Tech)' },
            { value: 'traditional-serif', label: 'Traditional Serif (Trustworthy)' },
            { value: 'creative-display', label: 'Creative Display (Unique, Artistic)' },
            { value: 'elegant-serif', label: 'Elegant Serif (Luxury, Premium)' },
            { value: 'friendly-rounded', label: 'Friendly Rounded (Approachable)' }
          ]
        },
        {
          id: 'communicationTone',
          label: 'Communication tone:',
          type: 'select',
          options: [
            { value: 'professional', label: 'Professional & Formal' },
            { value: 'conversational', label: 'Conversational & Friendly' },
            { value: 'expert', label: 'Expert & Authoritative' },
            { value: 'inspiring', label: 'Inspiring & Motivational' },
            { value: 'direct', label: 'Direct & No-nonsense' },
            { value: 'playful', label: 'Playful & Creative' }
          ]
        }
      ]
    },
    {
      section: 'Website Priorities',
      icon: <Lightbulb className="w-5 h-5" />,
      questions: [
        {
          id: 'primaryAction',
          label: 'Main action for website visitors:',
          type: 'select',
          options: [
            { value: 'contact', label: 'Contact/Schedule consultation' },
            { value: 'purchase', label: 'Purchase products' },
            { value: 'signup', label: 'Sign up/Subscribe' },
            { value: 'download', label: 'Download resources' },
            { value: 'learn', label: 'Learn about services' },
            { value: 'portfolio', label: 'View portfolio/work' }
          ]
        },
        {
          id: 'credibility',
          label: 'Your strongest credibility factor:',
          type: 'select',
          options: [
            { value: 'testimonials', label: 'Client testimonials' },
            { value: 'portfolio', label: 'Portfolio/case studies' },
            { value: 'certifications', label: 'Certifications/credentials' },
            { value: 'experience', label: 'Years of experience' },
            { value: 'notable-clients', label: 'Notable clients/brands' },
            { value: 'awards', label: 'Awards/recognition' }
          ]
        }
      ]
    }
  ];

  const MultiSelect = ({ options, value = [], onChange }) => {
    const handleToggle = (optionValue) => {
      const newValue = value.includes(optionValue)
        ? value.filter(v => v !== optionValue)
        : [...value, optionValue];
      onChange(newValue);
    };

    return (
      <div className="space-y-2">
        {options.map(option => (
          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={value.includes(option.value)}
              onChange={() => handleToggle(option.value)}
              className="rounded border-gray-300"
            />
            <span className="text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    );
  };

  const recommendations = getRecommendations();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Brand System Questionnaire</h1>
        <p className="text-gray-600">Quick selections to generate your custom brand recommendations</p>
      </div>

      <div className="space-y-6">
        {questions.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleSection(sectionIndex)}
              className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-t-lg"
            >
              <div className="flex items-center space-x-3">
                {section.icon}
                <h2 className="text-lg font-semibold text-gray-900">{section.section}</h2>
              </div>
              {expandedSections[sectionIndex] ? <ChevronDown /> : <ChevronRight />}
            </button>
            
            {expandedSections[sectionIndex] && (
              <div className="p-6 space-y-6">
                {section.questions.map((question) => (
                  <div key={question.id} className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      {question.label}
                    </label>
                    
                    {question.type === 'select' ? (
                      <select
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Choose an option...</option>
                        {question.options.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <MultiSelect
                        options={question.options}
                        value={answers[question.id] || []}
                        onChange={(value) => handleAnswerChange(question.id, value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowRecommendations(true)}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
        >
          Generate Brand Recommendations
        </button>
      </div>

      {showRecommendations && Object.values(answers).length > 0 && (
        <div className="mt-12 space-y-8 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900">Your Custom Brand Recommendations</h2>
          
          {recommendations.colorPalette.length > 0 && (
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Color Palette
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {recommendations.colorPalette.map((color, index) => (
                  <li key={index}>{color}</li>
                ))}
              </ul>
            </div>
          )}

          {recommendations.typography.length > 0 && (
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Type className="w-5 h-5 mr-2" />
                Typography
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {recommendations.typography.map((font, index) => (
                  <li key={index}>{font}</li>
                ))}
              </ul>
            </div>
          )}

          {recommendations.visualStyle.length > 0 && (
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Visual Style
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {recommendations.visualStyle.map((style, index) => (
                  <li key={index}>{style}</li>
                ))}
              </ul>
            </div>
          )}

          {recommendations.messaging.length > 0 && (
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Messaging Strategy
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {recommendations.messaging.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            </div>
          )}

          {recommendations.layout.length > 0 && (
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Layout Recommendations
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {recommendations.layout.map((layout, index) => (
                  <li key={index}>{layout}</li>
                ))}
              </ul>
            </div>
          )}

          {recommendations.features.length > 0 && (
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Website Features Priority
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {recommendations.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Review these recommendations with your design team</li>
              <li>Create mood boards based on the visual style suggestions</li>
              <li>Develop 2-3 logo concepts using the recommended approach</li>
              <li>Build a color palette with primary, secondary, and accent colors</li>
              <li>Select specific fonts from the typography category</li>
              <li>Create website wireframes prioritizing the recommended features</li>
              <li>Write copy using the suggested messaging strategy</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandQuestionnaire;
