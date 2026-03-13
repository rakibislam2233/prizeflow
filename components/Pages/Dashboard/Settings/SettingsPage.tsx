"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { LogOut, Save, Shield, X } from "lucide-react";
import { useState } from "react";

const SettingsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    notifications: {
      drawReminder: true,
      entryConfirmations: true,
      winnerAnnouncements: false,
    },
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: value,
      },
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
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Manage your account settings and preferences
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
              Edit Settings
            </Button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Shield className="w-5 h-5" />
            Change password
          </h2>
        </div>
        <div className="p-4 lg:p-6">
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Current password</label>
              <FormInput
                type="password"
                value={formData.currentPassword}
                onChange={(e) => handleInputChange("currentPassword", e.target.value)}
                disabled={!isEditing}
                placeholder="Current password"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">New password</label>
              <FormInput
                type="password"
                value={formData.newPassword}
                onChange={(e) => handleInputChange("newPassword", e.target.value)}
                disabled={!isEditing}
                placeholder="New password"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Confirm password</label>
              <FormInput
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                disabled={!isEditing}
                placeholder="Confirm password"
              />
            </div>

            {isEditing && (
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button type="submit" variant="outline" className="w-full sm:w-auto">
                  Update Password
                </Button>
                <Button type="button" variant="ghost" className="w-full sm:w-auto" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Notification preference</h2>
        </div>
        <div className="p-4 lg:p-6">
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="font-medium">Draw reminder</p>
                <p className="text-sm text-gray-600">Get notified before draws</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.notifications.drawReminder}
                  onChange={(e) => handleNotificationChange("drawReminder", e.target.checked)}
                  disabled={!isEditing}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="font-medium">Entry Confirmations</p>
                <p className="text-sm text-gray-600">Confirm your entries</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.notifications.entryConfirmations}
                  onChange={(e) => handleNotificationChange("entryConfirmations", e.target.checked)}
                  disabled={!isEditing}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="font-medium">Winner Announcements</p>
                <p className="text-sm text-gray-600">Know when you win</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.notifications.winnerAnnouncements}
                  onChange={(e) => handleNotificationChange("winnerAnnouncements", e.target.checked)}
                  disabled={!isEditing}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            {isEditing && (
              <Button type="submit" variant="outline" className="w-full sm:w-auto">
                Save change
              </Button>
            )}
          </form>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-red-200">
        <div className="p-4 lg:p-6 border-b border-red-200">
          <h2 className="text-lg font-semibold text-red-600">Danger zone</h2>
        </div>
        <div className="p-4 lg:p-6">
          <form className="space-y-3">
            <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
            <Button type="submit" variant="outline" className="w-full sm:w-auto text-red-600 border-red-300 hover:bg-red-50">
              <LogOut className="w-4 h-4 mr-2" />
              Delete account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
