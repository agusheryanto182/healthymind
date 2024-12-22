"use client";

import { useState } from "react";

export default function ConsultButton({ data }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contacts = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      contacts.push({
        title: data[i].title,
        url: data[i].url,
      });
    }
  }

  return (
    <div>
      {/* Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-lg border border-cyan-500 px-4 py-2 text-[--primary] hover:bg-[--hover] hover:text-white"
      >
        Konsultasi
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-3/4 max-w-lg rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-bold text-gray-800">
              Pilih Kontak
            </h2>
            <ul>
              {contacts.map((contact, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg border border-cyan-500 bg-cyan-100 p-3 text-cyan-700 hover:bg-cyan-200"
                  >
                    {contact.title}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
