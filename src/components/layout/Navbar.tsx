
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Career Assistant', path: '/career-assistant' },
    { label: 'Resume Builder', path: '/resume-builder' },
    { label: 'Job Statistics', path: '/job-statistics' },
    { label: 'Network', path: '/network' },
  ];

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Link 
          key={link.path} 
          to={link.path}
          className="text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-primary/10"
          onClick={() => isMobile && setIsOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
            <span className="font-bold text-white">CG</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">CareerGuide</span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-8">
                <NavLinks />
                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <LogIn className="mr-2 h-4 w-4" /> Log In
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            <nav className="hidden md:flex items-center gap-2">
              <NavLinks />
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="outline">
                <Link to="/login">
                  <LogIn className="mr-2 h-4 w-4" /> Log In
                </Link>
              </Button>
              <Button asChild>
                <Link to="/signup">
                  <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
