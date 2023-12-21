object TelaLoading: TTelaLoading
  Left = 0
  Top = 0
  Caption = 'TelaLoading'
  ClientHeight = 847
  ClientWidth = 547
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -12
  Font.Name = 'Segoe UI'
  Font.Style = []
  Menu = MainMenu1
  Position = poDesktopCenter
  TextHeight = 15
  object Button1: TButton
    Left = 249
    Top = 320
    Width = 57
    Height = 41
    Caption = 'Ok'
    TabOrder = 0
  end
  object Edit1: TEdit
    Left = 128
    Top = 216
    Width = 233
    Height = 25
    TabOrder = 1
    Text = 'Loging'
  end
  object Edit2: TEdit
    Left = 128
    Top = 264
    Width = 233
    Height = 25
    TabOrder = 2
    Text = 'Senha'
  end
  object Button2: TButton
    Left = 320
    Top = 320
    Width = 57
    Height = 41
    Caption = 'Cancelar'
    TabOrder = 3
  end
  object MainMenu1: TMainMenu
    Left = 88
    Top = 144
    object Cadastros1: TMenuItem
      Caption = 'Cadastros'
      object Enrtidades1: TMenuItem
        Caption = 'Entidades'
      end
      object Produtos1: TMenuItem
        Caption = 'Produtos'
      end
      object BIBIBI1: TMenuItem
        Caption = 'BIBIBI'
      end
      object SojaBIGHEAD1: TMenuItem
        Caption = 'Soja BIGHEAD'
      end
    end
  end
end
