"use client"

import { MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const phoneNumber = "919787304714"
  const defaultMessage = "Hello! I'm interested in your services."

  useEffect(() => {
    if (!soundEnabled) return

    const playVoiceNotification = () => {
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance("Hey what's up")

        utterance.rate = 0.8 // Smooth and calm
        utterance.pitch = 1.4 // Soft feminine tone
        utterance.volume = 0.9 // Clear volume

        // Try to select a female voice
        const voices = speechSynthesis.getVoices()
        const femaleVoice = voices.find(
          (voice) =>
            voice.name.toLowerCase().includes("female") ||
            voice.name.toLowerCase().includes("woman") ||
            voice.name.toLowerCase().includes("samantha") ||
            voice.name.toLowerCase().includes("karen") ||
            voice.name.toLowerCase().includes("victoria"),
        )

        if (femaleVoice) {
          utterance.voice = femaleVoice
        }

        speechSynthesis.speak(utterance)
      }
    }

    // Load voices first (they might not be available immediately)
    const loadVoices = () => {
      if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener("voiceschanged", loadVoices, { once: true })
      }
    }
    loadVoices()

    // Play voice notification every 2 minutes (120000 ms)
    const interval = setInterval(() => {
      playVoiceNotification()
    }, 60000) // 2 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [soundEnabled])

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
  }

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </button>

        <button
          onClick={toggleSound}
          className={`absolute -top-2 -left-2 w-6 h-6 rounded-full text-xs font-bold transition-colors ${
            soundEnabled ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-400 text-white hover:bg-gray-500"
          }`}
          title={soundEnabled ? "Voice notifications ON" : "Voice notifications OFF"}
        >
          {soundEnabled ? "🔊" : "🔇"}
        </button>
      </div>

      {/* Optional Chat Widget Preview */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-xl border max-w-sm w-80">
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Infosense Technology</h4>
                <p className="text-sm opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">Hi there! 👋 How can we help you today?</p>
            </div>
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Start Conversation
            </button>
          </div>
        </div>
      )}
    </>
  )
}
