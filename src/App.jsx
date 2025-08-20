import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-800/50 backdrop-blur-xl border-slate-700/50">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-display font-light bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
            Button Showcase
          </CardTitle>
          <CardDescription className="text-slate-400">
            Explore shadcn/ui button variants and patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-slate-300">Primary Actions</h3>
              <Button className="w-full" variant="default">
                <Sparkles className="mr-2 h-4 w-4" />
                Primary Button
              </Button>
              <Button className="w-full" variant="default" size="lg">
                Large Primary
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-slate-300">Secondary Styles</h3>
              <Button className="w-full" variant="secondary">
                Secondary Button
              </Button>
              <Button className="w-full" variant="outline">
                Outline Button
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-slate-300">Special Variants</h3>
              <Button className="w-full" variant="ghost">
                <Zap className="mr-2 h-4 w-4" />
                Ghost Button
              </Button>
              <Button className="w-full" variant="link">
                Link Style Button
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-slate-300">Destructive Actions</h3>
              <Button className="w-full" variant="destructive">
                Destructive Button
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-slate-300">Sizes</h3>
              <div className="flex gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;