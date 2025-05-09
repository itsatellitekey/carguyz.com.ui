import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Information = [
  {
    icon: Phone,
    title: "Phone",
    text: "+91-8989XXXXXX",
    link: "tel:#",
  },
  {
    icon: Mail,
    title: "Email",
    text: "support@carguyz.in",
    link: "mailto:#",
  },
  {
    icon: MapPin,
    title: "Service Areas",
    text: "Delhi NCR, Bengaluru, Hyderabad",
    link: "#",
  },
  {
    icon: Clock,
    title: "Service Hours",
    text: "8 AM – 8 PM (7 Days)",
  },
];

export default function ContactInfoItem() {
  return (
    <div className="space-y-6 contact-info-card">
      {Information.map((info, index) => {
        const Icon = info.icon;
        return (
          <div key={index} className="flex items-start space-x-4 contact-info-item">
            <div className="bg-primary/10 p-3 rounded-full">
              <Icon />
            </div>
            <div className="info-item">
              <h3 className="font-medium">{info.title}</h3>
              {info.link ? (
              <a href={info.link} className="text-gray-600 hover:text-secondary transition text-base">
                {info.text}
              </a>
              ) : (
                <p className="text-gray-600 hover:text-secondary transition text-base">{info.text}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
