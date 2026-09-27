import React, { useState } from 'react';

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userName: string) => void;
}

export const VipModal: React.FC<VipModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('register');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [simulatedSpend, setSimulatedSpend] = useState(350);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onLoginSuccess(name || email.split('@')[0] || 'Atleta VIP');
      onClose();
    }, 1200);
  };

  const cashbackCalculated = (simulatedSpend * 0.1).toFixed(2).replace('.', ',');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#111827] border border-[#262a34] rounded-3xl shadow-2xl p-6 sm:p-8 z-10 text-white my-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#181b25] text-[#c4c9ac] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Brand Lockup */}
        <div className="flex flex-col items-center text-center gap-2 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#c3f400]/15 border border-[#c3f400]/30 flex items-center justify-center text-[#c3f400]">
            <span className="material-symbols-outlined text-[28px]">workspace_premium</span>
          </div>
          <h2 className="font-headline text-2xl font-black uppercase tracking-tight">
            VIGOR Clube VIP // Portal
          </h2>
          <p className="text-xs text-[#c4c9ac] max-w-sm">
            Acumule 10% de cashback fitness, frete prioritário e acesso exclusivo a lotes de alta compressão.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 bg-[#090D16] p-1 rounded-xl mb-6 border border-[#262a34]">
          <button
            onClick={() => setTab('register')}
            className={`py-2 text-xs font-bold uppercase rounded-lg transition-all cursor-pointer ${
              tab === 'register'
                ? 'bg-[#c3f400] text-[#090D16] shadow-sm'
                : 'text-[#c4c9ac] hover:text-white'
            }`}
          >
            Cadastrar Gratuitamente
          </button>
          <button
            onClick={() => setTab('login')}
            className={`py-2 text-xs font-bold uppercase rounded-lg transition-all cursor-pointer ${
              tab === 'login'
                ? 'bg-[#c3f400] text-[#090D16] shadow-sm'
                : 'text-[#c4c9ac] hover:text-white'
            }`}
          >
            Já sou Membro
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-5xl text-[#c3f400] animate-bounce">
              check_circle
            </span>
            <h3 className="font-headline text-xl font-bold text-white">
              Bem-vindo ao Clube VIP!
            </h3>
            <p className="text-xs text-[#c4c9ac]">
              Seu desconto de 15% (código <strong>VIGOR15</strong>) e cashback ativo já foram sincronizados.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {tab === 'register' && (
              <div>
                <label className="text-xs font-semibold text-[#c4c9ac] block mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Rafael Silva"
                  className="w-full bg-[#181b25] border border-[#262a34] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#c3f400]"
                />
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-[#c4c9ac] block mb-1">
                E-mail
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="w-full bg-[#181b25] border border-[#262a34] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#c3f400]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#c4c9ac] block mb-1">
                Senha
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#181b25] border border-[#262a34] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#c3f400]"
              />
            </div>

            {/* Interactive Cashback Simulator */}
            <div className="bg-[#181b25] border border-[#262a34] p-4 rounded-2xl flex flex-col gap-2 mt-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#c4c9ac]">Simulador de Cashback VIP (10%):</span>
                <span className="text-[#c3f400] font-black text-sm tabular-nums">
                  Retorna R$ {cashbackCalculated}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={simulatedSpend}
                onChange={(e) => setSimulatedSpend(Number(e.target.value))}
                className="w-full accent-[#c3f400] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8e9379]">
                <span>Compra de R$ {simulatedSpend},00</span>
                <span>Saldo imediato para o próximo pedido</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 rounded-xl bg-[#c3f400] hover:bg-white text-[#090D16] font-headline font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(195,244,0,0.3)] cursor-pointer"
            >
              {tab === 'register' ? 'Criar Acesso VIP Grátis' : 'Entrar na Conta'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
