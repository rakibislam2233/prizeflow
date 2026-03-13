"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { dashboardProfileInitialData } from "@/data/dashboardData";
import { Calendar, Edit3, Mail, MapPin, Phone, Save, User, X } from "lucide-react";
import { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(dashboardProfileInitialData);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 lg:mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Manage your personal information and account settings
          </p>
        </div>
        <div className="flex items-center gap-3">
          {isEditing ? (
            <>
              <Button onClick={handleCancel} variant="outline" className="w-full sm:w-auto">
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave} className="w-full sm:w-auto">
                <Save className="w-4 h-4 mr-2" />
                Save change
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} className="w-full sm:w-auto">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <User className="w-5 h-5" />
            Personal information
          </h2>
        </div>
        <div className="p-4 lg:p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">First name</label>
                <FormInput
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  disabled={!isEditing}
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Last name</label>
                <FormInput
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  disabled={!isEditing}
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <FormInput
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                disabled={!isEditing}
                placeholder="Email"
                icon={Mail}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Phone</label>
              <FormInput
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                disabled={!isEditing}
                placeholder="Phone"
                icon={Phone}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Date of birth</label>
              <FormInput
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                disabled={!isEditing}
                icon={Calendar}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Address</label>
              <FormInput
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                disabled={!isEditing}
                placeholder="Address"
                icon={MapPin}
              />
            </div>

            {isEditing && (
              <Button type="submit" className="w-full sm:w-auto">
                Save change
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
