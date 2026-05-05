export default function LegalPage({ title, lastUpdated, children }: { title: string, lastUpdated: string, children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-6 py-32 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>
      <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
        {children}
      </div>
    </div>
  )
}
