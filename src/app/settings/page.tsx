"use client"
import { useState } from 'react';
// import { Button, Card, Input, Text } from 'shadcn-ui/react';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Profile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('noah@demo.dev');
  const [changePassword, setPassword] = useState<any>('Change Password');


  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <Card className=" min-h-screen w-full max-w-md p-6 shadow-lg">
        <div className="flex flex-col items-start">
          <h3 className='font-light text-lg'>Profile</h3>
          <h3 className='font-bold text-xl my-4'>Picture</h3>

          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="profile-image-upload"
            />
            <label htmlFor="profile-image-upload" className="cursor-pointer">
              {profileImage ? (
                <img src={profileImage.toString()} alt="Profile" />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <h3>Upload</h3>
                </div>
              )}
            </label>
          </div>
          <label className='font-bold text-xl'>Name</label>
          <p className='text-gray-400 text-sm my-4'>Your name as it will be displayed.</p>
          <div className='flex justify-between gap-4'>
            <div>
            <label className='font-semibold text-gray-400'>First Name</label>  
          <Input
            // label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mb-4"
          />
            </div>
            <div>
            <label className='font-semibold text-gray-400'>Last Name</label>  
          <Input
            // label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mb-4"
          />
            </div>
          </div>
         
          <label className='font-bold text-xl'>Email</label>
          <p className='text-gray-400 text-sm my-4'>Email associated to your account</p>
          <Input
            // label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
            className="mb-4"
          />
           <label className='font-bold text-xl'>Change Password</label>
          <p className='text-gray-400 text-sm my-4'>Receive an email containing password update link</p>
          <Input
            // label="Email"
            value={changePassword}
            onChange={(e) => setPassword(e.target.value)}
            disabled
            className="mb-4"
          />
          <Button  onClick={() => alert('Account deleted')} className="mt-2  bg-white text-red-600">Delete Account</Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
