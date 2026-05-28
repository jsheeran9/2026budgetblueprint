// main.jsx — canvas host with hi-fi + wireframes

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);

  // legacy wireframe vars
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--paper', t.paper);
  }, [t.accent, t.paper]);

  return (
    <React.Fragment>
      <DesignCanvas>
        <DCSection id="hifi"
                   title="Coastal Builders Associates — 2026 Bathroom Budget Blueprint"
                   subtitle="Hi-fi landing page. Open fullscreen to scroll. Tweak palette, hero image, headline, and collage tape in the panel.">
          <DCArtboard id="coastal" label="01 · Coastal Builders (Hi-Fi)"
                       width={1440} height={6400}>
            <CoastalLanding t={t} />
          </DCArtboard>
        </DCSection>

        <DCSection id="wireframes"
                   title="Earlier wireframe explorations"
                   subtitle="Lower-fi structural studies. Kept for reference — you can delete any artboard you don't want.">
          <DCArtboard id="editorial" label="02 · Editorial Asymmetric" width={1280} height={3300}>
            <VariationEditorial t={t} />
          </DCArtboard>
          <DCArtboard id="dossier" label="03 · Blueprint Dossier" width={1280} height={3500}>
            <VariationDossier t={t} />
          </DCArtboard>
          <DCArtboard id="diagonal" label="04 · Diagonal Cut" width={1280} height={3400}>
            <VariationDiagonal t={t} />
          </DCArtboard>
          <DCArtboard id="bento" label="05 · Bento Magazine" width={1280} height={3200}>
            <VariationBento t={t} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hi-fi · Palette" />
        <TweakRadio label="Palette" value={t.palette}
                    options={['slate','brass','marble','storm']}
                    onChange={v => setTweak('palette', v)} />

        <TweakSection label="Hi-fi · Hero" />
        <TweakRadio label="Hero image" value={t.heroImage}
                    options={['spa','modern','light']}
                    onChange={v => setTweak('heroImage', v)} />
        <TweakText label="Headline (use *…* for italic)" value={t.headline}
                   onChange={v => setTweak('headline', v)} />
        <TweakText label="Subheadline" value={t.subheadline}
                   onChange={v => setTweak('subheadline', v)} />
        <TweakText label="CTA copy" value={t.ctaCopy}
                   onChange={v => setTweak('ctaCopy', v)} />

        <TweakSection label="Hi-fi · Details" />
        <TweakToggle label="Collage tape" value={t.collageTape}
                     onChange={v => setTweak('collageTape', v)} />

        <TweakSection label="Wireframes · legacy" />
        <TweakColor label="Wireframe accent" value={t.accent}
                    options={['#b8412c','#2a5d3a','#1f3a8a','#7a3a8a']}
                    onChange={v => setTweak('accent', v)} />
        <TweakToggle label="Sketchy annotations" value={t.showAnnotations}
                     onChange={v => setTweak('showAnnotations', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
