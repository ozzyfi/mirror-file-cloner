import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Toola'

interface PilotRequestProps {
  name?: string
  company?: string
  phone?: string
  email?: string
  language?: string
}

const PilotRequestNotificationEmail = ({
  name, company, phone, email, language,
}: PilotRequestProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Yeni pilot başvurusu — {name || 'İsimsiz'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={tag}>— Yeni Pilot Başvurusu</Text>
        <Heading style={h1}>{name || 'İsimsiz Başvuran'}</Heading>
        <Text style={text}>
          {SITE_NAME} sitesinden yeni bir pilot programı başvurusu alındı.
        </Text>

        <Section style={card}>
          <Row label="Ad Soyad" value={name} />
          <Row label="Şirket" value={company} />
          <Row label="Telefon" value={phone} />
          <Row label="E-posta" value={email} />
          <Row label="Dil" value={language === 'en' ? 'English' : 'Türkçe'} />
        </Section>

        <Hr style={hr} />
        <Text style={footer}>{SITE_NAME} · Otomatik bildirim</Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Text style={rowStyle}>
    <span style={labelStyle}>{label}: </span>
    <span style={valueStyle}>{value || '—'}</span>
  </Text>
)

export const template = {
  component: PilotRequestNotificationEmail,
  subject: (data: Record<string, any>) =>
    `Yeni pilot başvurusu — ${data?.name || 'İsimsiz'}${data?.company ? ` (${data.company})` : ''}`,
  displayName: 'Pilot başvuru bildirimi',
  previewData: {
    name: 'Ayşe Yılmaz',
    company: 'Acme Üretim A.Ş.',
    phone: '+90 555 123 4567',
    email: 'ayse@acme.com',
    language: 'tr',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif", color: '#0F1A2E' }
const container = { padding: '32px 28px', maxWidth: '560px', margin: '0 auto' }
const tag = { fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#E8601C', margin: '0 0 12px' }
const h1 = { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '32px', fontWeight: 400, color: '#0F1A2E', margin: '0 0 16px', lineHeight: 1.15 }
const text = { fontSize: '15px', color: '#0F1A2E', lineHeight: 1.6, margin: '0 0 24px' }
const card = { backgroundColor: '#F7F5F0', borderRadius: '10px', padding: '20px 22px', margin: '0 0 24px' }
const rowStyle = { fontSize: '14px', color: '#0F1A2E', margin: '0 0 8px', lineHeight: 1.5 }
const labelStyle = { fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#1A7A6D', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }
const valueStyle = { color: '#0F1A2E', fontWeight: 500 }
const hr = { borderColor: '#E5E7EB', margin: '24px 0 16px' }
const footer = { fontSize: '12px', color: '#6B7280', margin: 0 }
