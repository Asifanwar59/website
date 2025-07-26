# install Stripe: pip install stripe

import stripe
stripe.api_key = 'your_api_key_here'

def process_payment(amount):
    payment_intent = stripe.PaymentIntent.create(
        amount=int(amount * 100),  # in paise or cents
        currency='inr',
        metadata={'integration_check': 'accept_a_payment'},
    )
    return payment_intent