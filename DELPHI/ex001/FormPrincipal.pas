unit FormPrincipal;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.Menus;

type
  TTelaLoading = class(TForm)
    Button1: TButton;
    Edit1: TEdit;
    Edit2: TEdit;
    Button2: TButton;
    MainMenu1: TMainMenu;
    Cadastros1: TMenuItem;
    Enrtidades1: TMenuItem;
    Produtos1: TMenuItem;
    BIBIBI1: TMenuItem;
    SojaBIGHEAD1: TMenuItem;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  TelaLoading: TTelaLoading;

implementation

{$R *.dfm}

end.
