'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
// import { useToast } from '@/components/ui/use-toast';
import { toast } from 'sonner';
import { Mail, MessageSquare, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactPage = () => {
  //   const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: any) => {
    // toast('Message Sent Successfully!', {
    //   description: "I'll get back to you soon.",

    //   //   variant: 'default',
    // });
    toast.success('Message Sent Successfully!', {
      description: 'I will get back to you soon.',
      style: {
        background: 'linear-gradient(to right, #66bb6a, #43a047)', // Gradient for a modern look
        color: '#fff',
        borderRadius: '8px', // Slightly more rounded corners
        padding: '16px 20px', // Increased padding for better visual spacing
        fontSize: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
        border: '1px solid #43a047', // Add a subtle border to match the darker end of the gradient
      },
      icon: '✅', //Add a checkmark for clarity.
      duration: 4000, //Adjust the display time as needed.
      position: 'top-right', // Adjust the position as needed.
    });

    reset();
  };

  return (
    <section className="py-16 px-6 md:px-8 flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="max-w-lg w-full shadow-lg dark:bg-gray-800 mt-10">
        <CardContent className="p-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 text-center mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Feel free to reach out for inquiries or collaborations!
          </motion.p>

          <motion.form
            className="mt-8 space-y-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Label htmlFor="name">Your Name</Label>
              <div className="relative">
                <User
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register('name')}
                  className="pl-10"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Your Email</Label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email')}
                  className="pl-10"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Your Message</Label>
              <div className="relative">
                <MessageSquare
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <Textarea
                  id="message"
                  placeholder="Write your message..."
                  {...register('message')}
                  className="pl-10"
                  rows={4}
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactPage;
