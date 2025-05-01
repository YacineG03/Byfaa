import { Star } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={16} fill="currentColor" />
        ))}
      </div>

      <p className="testimonial-text">"{testimonial.text}"</p>

      <div className="testimonial-author">
        <img
          src={testimonial.image || "/placeholder.svg?height=100&width=100"}
          alt={testimonial.name}
          className="testimonial-author-image"
        />
        <div className="testimonial-author-info">
          <h4 className="testimonial-author-name">{testimonial.name}</h4>
          <p className="testimonial-author-role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
