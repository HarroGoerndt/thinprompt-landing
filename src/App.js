export default function ThinPromptLanding() {
  return (
    <div style={{ minHeight: '100vh', background: 'white', color: '#333', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>ThinPrompt</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Compress your prompts. Save tokens. Unlock GPT power with radical efficiency.
        </p>
        <div style={{ background: '#f5f5f5', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>What is ThinPrompt?</h2>
          <p>
            ThinPrompt is a lightweight open-source tool that shortens your input prompts before sending them to GPT, and translates the output back into human-readable language – fast, transparent, and model-agnostic.
          </p>
        </div>
        <div style={{ display: 'grid', gap: '1rem', textAlign: 'left' }}>
          <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '1rem', padding: '1rem' }}>
            <h3 style={{ fontWeight: 'bold' }}>✅ Save Tokens</h3>
            <p>Reduce token usage by up to 70% with compact syntax and domain-specific abbreviation rules.</p>
          </div>
          <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '1rem', padding: '1rem' }}>
            <h3 style={{ fontWeight: 'bold' }}>⚙️ Open & Customizable</h3>
            <p>Built in Python. Fine-tune your lexicon, add domains, or integrate with your favorite LLM stack.</p>
          </div>
          <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '1rem', padding: '1rem' }}>
            <h3 style={{ fontWeight: 'bold' }}>🌐 Model-Agnostic</h3>
            <p>Works with OpenAI, Anthropic, Mistral, Hugging Face and more – just wrap and compress.</p>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <button style={{ background: '#000', color: '#fff', padding: '0.75rem 2rem', borderRadius: '999px', fontSize: '1rem' }}>
            Try ThinPrompt Free
          </button>
        </div>
        <footer style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#999' }}>
          © 2025 ThinPrompt. Built with efficiency in mind.
        </footer>
      </div>
    </div>
  );
}
