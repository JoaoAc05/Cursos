program PrimeiroProjeto;

uses
  Vcl.Forms,
  FormPrincipal in 'FormPrincipal.pas' {TelaLoading};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TTelaLoading, TelaLoading);
  Application.Run;
end.
